/*
This function autosorts the sponsorships requests sheet --

I (henry) made this when Jahad asked me to on 3/15/24, 
and the function is modified from one i found here:
https://webapps.stackexchange.com/questions/7211/how-can-
 i-make-some-data-on-a-google-sheets-auto-sorting.

The auto-sort will break if you change the name of the
sheet without changing it here

If this is at all opaque/if you have questions feel free 
to email me: henry@josephson.net
*/
function onEdit(event) { //whenever a sheet on this google sheet is edited...
  const ss = event.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();



  // ...check if the edited sheet is "Co-Sponsorship Requests"...
  if (sheetName === "Co-Sponsorship Requests") {
    // ...get the range of the sheet except the header row...
    const range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());

    // ... and sort that range by the 10th column (priority), 
    // 11th (fellows approved), 12th (Leg Team Approved),
    // 13th (approved for signon), and 14th (sent co-spons req).
  
    range.sort(
      [
        {column: 10, ascending: true}, 
        {column: 11, ascending: true}, //renumbered the yeses, nos, and maybes
                                       // so that it'd sort nicer
        {column: 12, ascending: true},
        {column: 13, ascending: true},
        {column: 14, ascending: true},
      ]
    );
  }
}