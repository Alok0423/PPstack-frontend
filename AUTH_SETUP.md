# Backend & Google Auth Setup

## Backend (.env)
Create or update `backend/.env` with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=some_secure_secret
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
CLIENT_URL=http://localhost:5173   # Vite default dev URL (optional)
EMAIL_SERVICE=gmail                # optional if you use welcome emails
EMAIL_USER=youremail@example.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@yourdomain.com
```

Start backend (from `backend/`):

```powershell
cd backend
npm install
npm run start
```

## Frontend (.env.local)
Create `.env.local` in project root:

```
VITE_API_URL=http://localhost:5000/api/auth
VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
```

Start frontend:

```powershell
npm install
npm run dev
```

## Usage
- Visit `http://localhost:5173`.
- Open Login / Signup and click Google button.
- The frontend will get a Google ID token and POST it to `/api/auth/google`.
- The backend verifies the token, creates or finds the user, and responds with a JWT and user object which the frontend stores in `localStorage`.

## Troubleshooting
- Ensure `VITE_GOOGLE_CLIENT_ID` (frontend) and `GOOGLE_CLIENT_ID` (backend) are identical.
- Check backend logs for verification errors.
- If you get CORS issues, set `CLIENT_URL` in `backend/.env` to your frontend origin.
- Make sure `MONGO_URI` is a valid MongoDB connection string.

