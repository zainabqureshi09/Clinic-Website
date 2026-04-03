# Google Sheets Appointment Setup Instructions

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "BSRV Clinic Appointments"
4. In the first row, add these column headers:
   - **A1:** `Timestamp`
   - **B1:** `Name`
   - **C1:** `Email`
   - **D1:** `Phone`
   - **E1:** `Department`
   - **F1:** `Doctor`
   - **G1:** `Date`
   - **H1:** `Time`
   - **I1:** `Message`

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.department,
      data.doctor,
      data.date,
      data.time,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name the project something like "Clinic Appointments Script"

## Step 3: Deploy the Script
1. Click the **Deploy** button (top right) → **New deployment**
2. Click the **Select type** gear icon → **Web app**
3. Fill in:
   - **Description:** "Clinic Appointment Form"
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` ⚠️ (This is important!)
4. Click **Deploy**
5. Google will ask for permissions - click **Review permissions** → Choose your account → **Allow**
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/.../exec`)

## Step 4: Update the Config File
1. Open `src/config/googleSheets.js` in your project
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your copied Web app URL:

```javascript
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
```

## Step 5: Test It
1. Run your app: `npm run dev`
2. Go to the appointment page
3. Fill out the form and submit
4. Check your Google Sheet - the data should appear!

## Troubleshooting
- **"Failed to submit" error:** Make sure the script URL is correct and deployed with "Anyone" access
- **Data not appearing:** Check that the sheet has the correct column headers in row 1
- **CORS errors:** These are normal - the `no-cors` mode handles this, but you won't get a response back. The form will still work.
