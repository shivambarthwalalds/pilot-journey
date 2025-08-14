import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { full_name, email, number, message } = await req.json();
        // Nodemailer setup
        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: 465,
            secure: true, // true for 465, false for 587
            auth: {
                user: process.env.user,
                pass: process.env.password, // Make sure not to expose sensitive data in production
            },
        });

        // Email details
        const mailOptions = {
            from: '"Pilot Pathway" <admissions@pilotspathway.in>', // ✅ must match auth user
            to: "admissions@pilotspathway.in",
            subject: "PilotsPathway - Lead",
            html: ` <div style=" margin: 0 auto; background: #ffffff; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 25px 20px; text-align: center;">
            <div style="background: rgba(255, 255, 255, 0.15); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="color: white; font-size: 28px; font-weight: bold;">✈</div>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">PilotsPathway</h1>
        </div>

        <!-- Alert Banner -->
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px 20px;">
            <div style="display: flex; align-items: center;">
                <span style="color: #d97706; font-size: 18px; margin-right: 10px;">🚨</span>
                <div>
                    <h2 style="color: #92400e; margin: 0; font-size: 16px; font-weight: 600;">New Lead Alert</h2>
                    <p style="color: #a16207; margin: 2px 0 0; font-size: 13px;">A new prospective pilot has submitted an inquiry</p>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div style="padding: 20px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 20px; text-align: center;">You have received a new lead from your contact form:</p>
            
            <!-- Lead Information -->
            <div style="background: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                
                <!-- Name - Only shown if first_name or last_name exists -->
                ${full_name ? `
                <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                    <strong style="color: #1f2937; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Name:</strong>
                    <p style="color: #374151; margin: 4px 0 0; font-size: 15px; font-weight: 500;">${full_name}</p>
                </div>
                ` : ''}
                
                <!-- Email - Only shown if email exists -->
                ${email ? `
                <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                    <strong style="color: #1f2937; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Email:</strong>
                    <p style="color: #374151; margin: 4px 0 0; font-size: 15px; font-weight: 500;">${email}</p>
                </div>
                ` : ''}
                
                <!-- Phone - Only shown if number exists -->
                ${number ? `
                <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                    <strong style="color: #1f2937; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Phone:</strong>
                    <p style="color: #374151; margin: 4px 0 0; font-size: 15px; font-weight: 500;">${number}</p>
                </div>
                ` : ''}
                
                
                <!-- Message - Only shown if message exists -->
                ${message ? `
                <div style="background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #6366f1; margin-bottom: 0;">
                    <strong style="color: #1f2937; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Message:</strong>
                    <p style="color: #374151; margin: 8px 0 0; font-size: 14px; line-height: 1.5; font-style: italic;">"${message}"</p>
                </div>
                ` : ''}
            </div>

            <!-- Action Required -->
            <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600;">⚡ Action Required</h3>
                <p style="margin: 0; font-size: 14px; opacity: 0.95;">Please respond as soon as possible</p>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center;">
                ${email ? `
                <a href="mailto:${email}" style="display: inline-block; background: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 5px 8px; font-size: 13px;">
                    📧 Reply via Email
                </a>
                ` : ''}
                ${number ? `
                <a href="tel:${number}" style="display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 5px 8px; font-size: 13px;">
                    📞 Call Now
                </a>
                ` : ''}
            </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #6b7280; margin: 0; font-size: 12px;">
                Auto-generated by PilotsPathway lead system
            </p>
            <p style="color: #9ca3af; margin: 4px 0 0; font-size: 11px;">
                © 2025 PilotsPathway 
            </p>
        </div>
    </div>`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Details sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("mailerror", error);
        return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }
}
