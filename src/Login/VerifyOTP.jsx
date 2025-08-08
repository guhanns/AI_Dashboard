import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function VerifyOTP() {
  return (
    <div className="login-root row no-gutters min-vh-100">
      <div className="login-gradient col-md-6 d-none d-md-flex align-items-center justify-content-center">
        <div className="login-gradient-content text-white text-center">
          <h1 className="display-4 font-weight-bold mb-4">Verify OTP</h1>
          <p className="lead">Enter the OTP sent to your email to continue.</p>
        </div>
      </div>
      <div className="login-form-col col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="login-form-box w-100" style={{maxWidth: 400}}>
          <h2 className="mb-4 text-center font-weight-bold">Verify OTP</h2>
          <Form>
            <FormGroup>
              <Label for="otp">OTP</Label>
              <Input type="text" name="otp" id="otp" placeholder="Enter OTP" required maxLength={6} />
            </FormGroup>
            <Button color="primary" block className="login-signin-btn mb-3">Verify</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
