import React from 'react';
import { Table, Button } from 'reactstrap';
import Layout from '../Layout/Layout';
import './Blog.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Blog() {
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog List</h2>
          <Button color="primary" className="blog-add-btn">
            Add Blog
          </Button>
        </div>
        <div className="blog-table-container">
          <Table bordered hover responsive className="blog-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>How to Study Abroad</td>
                <td>Jane Smith</td>
                <td>2024-06-01</td>
                <td><span className="blog-status">Published</span></td>
                <td>
                  <Button size="sm" color="info" className="blog-action-btn blog-edit-btn" title="Edit"><EditIcon fontSize="small" /></Button>
                  <Button size="sm" color="danger" className="blog-delete-btn" title="Delete"><DeleteIcon fontSize="small" /></Button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
