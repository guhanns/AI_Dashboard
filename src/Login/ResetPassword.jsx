import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ResetPassword() {
  return (
    <div className="login-root row no-gutters min-vh-100">
      <div className="login-gradient col-md-6 d-none d-md-flex align-items-center justify-content-center">
        <div className="login-gradient-content text-white text-center">
          <h1 className="display-4 font-weight-bold mb-4">Reset Password</h1>
          <p className="lead">Enter your new password below to reset your account password.</p>
        </div>
      </div>
      <div className="login-form-col col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="login-form-box w-100" style={{maxWidth: 400}}>
          <h2 className="mb-4 text-center font-weight-bold">Reset Password</h2>
          <Form>
            <FormGroup>
              <Label for="newPassword">New Password</Label>
              <Input type="password" name="newPassword" id="newPassword" placeholder="Enter new password" required />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm new password" required />
            </FormGroup>
            <Button color="primary" block className="login-signin-btn mb-3">Reset Password</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
