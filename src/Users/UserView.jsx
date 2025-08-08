import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane, Progress } from 'reactstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UpdateIcon from '@mui/icons-material/Update';
import LoginIcon from '@mui/icons-material/Login';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventIcon from '@mui/icons-material/Event';
import WcIcon from '@mui/icons-material/Wc';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// Passport icon is not available, use CardMembership as a substitute
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import './UserView.css';

const baseColor = '#dd0e3a';

export default function UserView() {
  const [activeTab, setActiveTab] = useState('info');
  const completion = 78;
  return (
    <Layout>
      <div className="user-view-container">
        <div className="user-view-header">
          <div className="user-profile-img">
            <AccountCircleIcon style={{ fontSize: 90, color: baseColor }} />
          </div>
          <div className="user-profile-details">
            <h2 className="user-name">Jane Doe</h2>
            <div className="user-email"><EmailIcon style={{ color: baseColor, fontSize: 20, marginRight: 6 }} /> jane.doe@example.com</div>
            <div className="user-status">
              <CheckCircleIcon style={{ color: baseColor, fontSize: 18, marginRight: 4 }} /> Active
            </div>
            <div className="user-completion mt-2">
              <span className="font-weight-bold mr-2">Profile Completion:</span>
              <Progress value={completion} color="danger" style={{ height: 8, background: '#ffe5ea', width: 180, display: 'inline-block', verticalAlign: 'middle' }} />
              <span className="ml-2" style={{ color: baseColor, fontWeight: 600 }}>{completion}%</span>
            </div>
          </div>
          <div className="user-profile-meta">
            <div className="user-meta-item">
              <LoginIcon style={{ color: baseColor, fontSize: 22, marginBottom: 2 }} />
              <div className="user-meta-label">Last Login</div>
              <div className="user-meta-value">2024-06-10 14:23</div>
            </div>
            <div className="user-meta-item">
              <UpdateIcon style={{ color: baseColor, fontSize: 22, marginBottom: 2 }} />
              <div className="user-meta-label">Latest Update</div>
              <div className="user-meta-value">Profile updated 2 days ago</div>
            </div>
            <div className="user-meta-item">
              <AssignmentIcon style={{ color: baseColor, fontSize: 22, marginBottom: 2 }} />
              <div className="user-meta-label">Application Status</div>
              <div className="user-meta-value">In Review</div>
            </div>
          </div>
        </div>
        <Nav tabs className="user-view-tabs mt-4">
          <NavItem>
            <NavLink className={`user-view-tab${activeTab === 'info' ? ' active' : ''}`} onClick={() => setActiveTab('info')}><AccountCircleIcon style={{ color: baseColor, fontSize: 20, marginBottom: 2, marginRight: 4 }} /> User Info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={`user-view-tab${activeTab === 'academic' ? ' active' : ''}`} onClick={() => setActiveTab('academic')}><SchoolIcon style={{ color: baseColor, fontSize: 20, marginBottom: 2, marginRight: 4 }} /> Academic Qualification</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={`user-view-tab${activeTab === 'preferred' ? ' active' : ''}`} onClick={() => setActiveTab('preferred')}><FavoriteIcon style={{ color: baseColor, fontSize: 20, marginBottom: 2, marginRight: 4 }} /> Preferred</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={`user-view-tab${activeTab === 'applied' ? ' active' : ''}`} onClick={() => setActiveTab('applied')}><AssignmentIcon style={{ color: baseColor, fontSize: 20, marginBottom: 2, marginRight: 4 }} /> Application Applied</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={`user-view-tab${activeTab === 'documents' ? ' active' : ''}`} onClick={() => setActiveTab('documents')}><DescriptionIcon style={{ color: baseColor, fontSize: 20, marginBottom: 2, marginRight: 4 }} /> Upload Document</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="user-view-tab-content">
          <TabPane tabId="info">
            <div className="user-tab-section">
              <div className="user-info-row">
                {/* Left: Basic Information */}
                <div className="user-info-col">
                  <h3 className="mb-3" style={{color: '#232323', fontWeight: 700}}>
                    <AccountCircleIcon style={{color: '#232323', fontSize: 24, marginRight: 6}} /> Basic Information
                  </h3>
                  <div className="user-info-list">
                    <div className="user-info-list-item"><AccountCircleIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">First Name:</span> <span className="user-info-value">Jane</span></div>
                    <div className="user-info-list-item"><AccountCircleIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Last Name:</span> <span className="user-info-value">Doe</span></div>
                    <div className="user-info-list-item"><EventIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Date of Birth:</span> <span className="user-info-value">1990-05-15</span></div>
                    <div className="user-info-list-item"><WcIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Gender:</span> <span className="user-info-value">Female</span></div>
                    <div className="user-info-list-item"><PublicIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Nationality:</span> <span className="user-info-value">Indian</span></div>
                    <div className="user-info-list-item"><LanguageIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">First Language:</span> <span className="user-info-value">English</span></div>
                    <div className="user-info-list-item"><FavoriteIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Marital Status:</span> <span className="user-info-value">Single</span></div>
                  </div>
                </div>
                {/* Right: Contact Address */}
                <div className="user-info-col">
                  <h3 className="mb-3" style={{color: '#232323', fontWeight: 700}}>
                    <HomeIcon style={{color: '#232323', fontSize: 24, marginRight: 6}} /> Contact Address
                  </h3>
                  <div className="user-info-list">
                    <div className="user-info-list-item"><EmailIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Email:</span> <span className="user-info-value">jane.doe@example.com</span></div>
                    <div className="user-info-list-item"><PhoneIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Mobile:</span> <span className="user-info-value">+91 9876543210</span></div>
                    <div className="user-info-list-item"><HomeIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Address:</span> <span className="user-info-value">123 Main St</span></div>
                    <div className="user-info-list-item"><LocationCityIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">City:</span> <span className="user-info-value">Mumbai</span></div>
                    <div className="user-info-list-item"><LocationOnIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">State:</span> <span className="user-info-value">Maharashtra</span></div>
                    <div className="user-info-list-item"><MarkunreadMailboxIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Postal Code:</span> <span className="user-info-value">400001</span></div>
                    <div className="user-info-list-item"><CardMembershipIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Passport:</span> <span className="user-info-value">M1234567</span></div>
                    <div className="user-info-list-item"><EventAvailableIcon style={{color: '#232323', fontSize: 20, marginRight: 6}} /><span className="user-info-key">Passport Expiry:</span> <span className="user-info-value">2030-05-15</span></div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="academic">
            <div className="user-tab-section">Academic Qualification details go here.</div>
          </TabPane>
          <TabPane tabId="preferred">
            <div className="user-tab-section">Preferred details go here.</div>
          </TabPane>
          <TabPane tabId="applied">
            <div className="user-tab-section">Application Applied details go here.</div>
          </TabPane>
          <TabPane tabId="documents">
            <div className="user-tab-section">Upload Document details go here.</div>
          </TabPane>
        </TabContent>
      </div>
    </Layout>
  );
}
