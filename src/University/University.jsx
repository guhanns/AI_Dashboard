import React from 'react';
import { Table, Button } from 'reactstrap';
import Layout from '../Layout/Layout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function University() {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">University List</h2>
          <Button color="primary" className="!bg-blue-600 !border-blue-600 !text-white shadow-md hover:!bg-blue-700 transition-all duration-150">
            Add University
          </Button>
        </div>
        <div className="overflow-x-auto rounded-lg shadow">
          <Table bordered hover responsive className="min-w-full text-sm text-gray-700 bg-white border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Country</th>
                <th>Ranking</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 transition-colors">
                <th scope="row">1</th>
                <td>MIT</td>
                <td>USA</td>
                <td>1</td>
                <td><span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">Active</span></td>
                <td>
                  <Button size="sm" color="info" className="mr-2 !bg-blue-500 !border-blue-500" title="Edit"><EditIcon fontSize="small" /></Button>
                  <Button size="sm" color="danger" className="!bg-red-500 !border-red-500" title="Delete"><DeleteIcon fontSize="small" /></Button>
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
