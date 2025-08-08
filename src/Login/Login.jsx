import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  return (
    <div className="login-root row no-gutters min-vh-100">
      <div className="login-gradient col-md-6 d-none d-md-flex align-items-center justify-content-center">
        <div className="login-gradient-content text-white text-center">
          <h1 className="display-4 font-weight-bold mb-4">Welcome Back!</h1>
          <p className="lead">Sign in to access your dashboard and manage your account.</p>
        </div>
      </div>
      <div className="login-form-col col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="login-form-box w-100" style={{maxWidth: 400}}>
          <h2 className="mb-4 text-center font-weight-bold">Sign In</h2>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" required />
            </FormGroup>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FormGroup check className="mb-0">
                <Label check>
                  <Input type="checkbox" /> Remember me
                </Label>
              </FormGroup>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>
            <Button color="primary" block className="login-signin-btn mb-3">Sign In</Button>
            <Button color="light" block className="login-google-btn mb-2">
              <GoogleIcon className="mr-2" style={{color: '#dd0e3a'}} /> Sign in with Google
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
