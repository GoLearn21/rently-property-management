# Rently - Property Management Platform

A production-ready Progressive Web App for property management with WhatsApp integration for automated rent receipt and maintenance ticket processing.

## Features

### Property Owners
- 📊 **Dashboard**: Real-time metrics and insights
- 🏢 **Property Management**: Add properties, manage units, assign tenants
- 📄 **Receipt Tracking**: Automated rent payment processing via WhatsApp
- 🎫 **Ticket Management**: Maintenance request routing and tracking
- 🔧 **Provider Network**: Manage service providers by trade specialty
- 📱 **WhatsApp Integration**: Business account linking with status monitoring

### Service Providers
- 🎯 **Ticket Queue**: View and manage assigned maintenance tickets
- 📊 **Dashboard**: Track performance metrics and assigned buildings
- 💰 **Invoicing**: Create invoices directly within tickets
- 📱 **Real-time Updates**: Status updates and photo uploads
- ⭐ **Rating System**: Track customer satisfaction

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: CSS Modules with responsive design
- **State Management**: React Context API
- **Authentication**: Firebase Auth (Phone Authentication)
- **Database**: Firestore for real-time data
- **Storage**: Firebase Storage for media uploads
- **PWA**: Service Workers for offline functionality
- **Hosting**: Ready for Firebase Hosting deployment

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Firebase project with Authentication, Firestore, and Storage enabled
- WhatsApp Business API access (for production)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GoLearn21/rently-property-management.git
cd rently-property-management
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── components/
│   ├── Auth/           # Authentication components
│   ├── Owner/          # Property owner interface
│   │   ├── Dashboard/
│   │   ├── Properties/
│   │   ├── Receipts/
│   │   ├── Tickets/
│   │   ├── Providers/
│   │   └── Settings/
│   └── Provider/       # Service provider interface
├── contexts/           # React Context providers
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Key Features

### PWA Capabilities
- **Offline Support**: Core functionality works without internet
- **Home Screen Installation**: Add to mobile home screen
- **Push Notifications**: Real-time updates for tickets and receipts
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Real-time Features
- Live receipt updates from WhatsApp messages
- Instant ticket status changes and provider updates
- Real-time dashboard metrics
- Automatic notification system

### Security & Performance
- Role-based access control (Owner/Provider)
- Secure authentication with Firebase Auth
- Optimized bundle size and lazy loading
- Error boundaries and loading states

## Deployment

### Firebase Hosting
```bash
npm run build
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Other Platforms
The built application in the `build/` folder can be deployed to any static hosting service like Vercel, Netlify, or AWS S3.

## WhatsApp Integration

The app is designed to work with WhatsApp Business API through n8n workflows:

1. **Receipt Processing**: Tenants send payment confirmations to WhatsApp Business number
2. **Maintenance Requests**: Tenants report issues via WhatsApp messages
3. **Automated Routing**: Messages are parsed and routed to appropriate units and providers
4. **Status Updates**: Providers can send updates back through the system

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in this repository
- Check the documentation in the `/docs` folder
- Contact: [your-email@domain.com]

---

Built with ❤️ for modern property management