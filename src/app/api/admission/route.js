import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

export async function POST(req) {
  try {
    const formData = await req.json();

    // 1. Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 465, // Force port 465 for Gmail SSL
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection config
    console.log('--- SMTP Debug ---');
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0);
    console.log('------------------');
    await transporter.verify();

    // 2. Generate PDF in memory
    const generatePDF = (data) => {
      return new Promise((resolve, reject) => {
        try {
          const doc = new PDFDocument({ margin: 50, size: 'A4' });
          const buffers = [];

          doc.on('data', buffers.push.bind(buffers));
          doc.on('end', () => resolve(Buffer.concat(buffers)));
          doc.on('error', reject);

          // Add Branding (Optional logo path if available)
          // doc.image('public/sg-education/logo.webp', 50, 45, { width: 100 });
          
          doc.fontSize(24).fillColor('#1a365d').text('Admission Application Form', { align: 'center' });
          doc.moveDown();
          doc.fontSize(10).fillColor('#666666').text(`Submitted on: ${new Date().toLocaleString()}`, { align: 'center' });
          doc.moveDown(2);

          const addSection = (title, items) => {
            doc.fontSize(16).fillColor('#2b6cb0').text(title, { underline: true });
            doc.moveDown(0.5);
            doc.fontSize(12).fillColor('#000000');
            
            for (const [label, value] of Object.entries(items)) {
              if (value) {
                doc.font('Helvetica-Bold').text(`${label}: `, { continued: true });
                doc.font('Helvetica').text(value);
                doc.moveDown(0.3);
              }
            }
            doc.moveDown();
          };

          // Section 1: Student Details
          addSection('Student Details', {
            'Name': data.studentName,
            'Gender': data.gender,
            'Date of Birth': data.dob,
            'Applying For Grade': data.applyingFor,
            'Previous School': data.previousSchool || 'N/A'
          });

          // Section 2: Parent/Guardian Details
          addSection('Parent/Guardian Details', {
            'Name': data.parentName,
            'Relationship': data.relationship,
            'Mobile Number': data.mobileNumber,
            'Email Address': data.emailAddress,
            'Occupation': data.occupation || 'N/A',
            'Residential Address': data.residentialAddress
          });

          // Section 3: Visit Details (if applicable)
          if (data.isDirectVisit) {
            addSection('Direct Visit Details', {
              'Preferred Date': data.preferredVisitDate,
              'Preferred Time': data.preferredVisitTime,
              'Parent Name (Visit)': data.directVisitParentName,
              'Purpose of Visit': data.purposeOfVisit,
              'Additional Comments': data.additionalComments || 'None'
            });
          }

          doc.end();
        } catch (error) {
          reject(error);
        }
      });
    };

    const pdfBuffer = await generatePDF(formData);

    // 3. Send Email
    const mailOptions = {
      from: `"SG Education" <${process.env.SMTP_USER}>`,
      to: 'inymartlabs@gmail.com', // Sending to the specified address
      subject: `New Admission Application - ${formData.studentName}`,
      html: `
        <h2>New Admission Application Received</h2>
        <p>A new admission form has been submitted for <strong>${formData.studentName}</strong>.</p>
        <p>Please find the detailed application form attached as a PDF.</p>
        <br/>
        <p>Best regards,<br/>SG Education Automated System</p>
      `,
      attachments: [
        {
          filename: `Admission_${formData.studentName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });

  } catch (error) {
    console.error('SMTP/PDF Generation Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to process application. Please try again later.' },
      { status: 500 }
    );
  }
}
