function generateOTP() {
    const otpLength = 6;

    
    const otp = Array.from({ length: otpLength }, () => Math.floor(Math.random() * 10)).join('');

    
    document.getElementById('otpDisplay').textContent = `Your OTP: ${otp}`;
}