import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Table, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './Courses.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <Layout>
      <div className="courses-container">
        <Nav tabs className="courses-nav mb-4 base-nav-tabs">
          <NavItem>
            <NavLink
              className={`base-nav-link${activeTab === 'courses' ? ' active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`base-nav-link${activeTab === 'subjects' ? ' active' : ''}`}
              onClick={() => setActiveTab('subjects')}
            >
              Subjects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`base-nav-link${activeTab === 'branches' ? ' active' : ''}`}
              onClick={() => setActiveTab('branches')}
            >
              Branches
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="courses">
            <div className="courses-header">
              <h2 className="courses-title">Courses List</h2>
              <Button color="primary" className="courses-add-btn">Add Course</Button>
            </div>
            <div className="courses-table-container">
              <Table bordered hover responsive className="courses-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Introduction to AI</td>
                    <td>Dr. Alan Turing</td>
                    <td>10 weeks</td>
                    <td><span className="courses-status">Active</span></td>
                    <td>
                      <Button size="sm" color="secondary" className="courses-action-btn" title="View"><VisibilityIcon fontSize="small" /></Button>
                      <Button size="sm" color="info" className="courses-action-btn courses-edit-btn" title="Edit"><EditIcon fontSize="small" /></Button>
                      <Button size="sm" color="danger" className="courses-delete-btn" title="Delete"><DeleteIcon fontSize="small" /></Button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </Table>
            </div>
          </TabPane>
          <TabPane tabId="subjects">
            <div className="courses-header">
              <h2 className="courses-title">Subjects List</h2>
              <Button color="primary" className="courses-add-btn">Add Subject</Button>
            </div>
            <div className="courses-table-container">
              <Table bordered hover responsive className="courses-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Subject Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Machine Learning</td>
                    <td><span className="courses-status">Active</span></td>
                    <td>
                      <Button size="sm" color="info" className="courses-action-btn courses-edit-btn" title="Edit"><EditIcon fontSize="small" /></Button>
                      <Button size="sm" color="danger" className="courses-delete-btn" title="Delete"><DeleteIcon fontSize="small" /></Button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </Table>
            </div>
          </TabPane>
          <TabPane tabId="branches">
            <div className="courses-header">
              <h2 className="courses-title">Branches List</h2>
              <Button color="primary" className="courses-add-btn">Add Branch</Button>
            </div>
            <div className="courses-table-container">
              <Table bordered hover responsive className="courses-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Branch Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Computer Science</td>
                    <td><span className="courses-status">Active</span></td>
                    <td>
                      <Button size="sm" color="info" className="courses-action-btn courses-edit-btn" title="Edit"><EditIcon fontSize="small" /></Button>
                      <Button size="sm" color="danger" className="courses-delete-btn" title="Delete"><DeleteIcon fontSize="small" /></Button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </Table>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </Layout>
  );
}
