/*
This function auto-sorts the sponsorship requests sheet,
and it'll break if you change stuff like the name of the
sheet without updating it here, the sheet might break.

This is the second version of the script (first version
is at
    https://github.com/henryjosephson/sheets-autosorter-for-jahad
    /blob/main/2024-03-15%20version.gs
If you can't access the repo, if anything here is opaque,
if you have feature requests, or you just want to say hi, then
you can always email me at henry@josephson.net. 

This time, I added a column to the sheet that takes a placeholder
value with some conditionals that depend on the values in the fields
Jahad wants, and I sort on that column first. I also added some
conditional formatting :)
*/
 
function onEdit(event) { //whenever a sheet on this google sheet is edited...
  const ss = event.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();

  // ...check if the edited sheet is "Co-Sponsorship Requests"...
  if (sheetName === "Co-Sponsorship Requests") {
    // ...get the range of the sheet except the header row...
    var range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());

    // ... and sort that range by the 10th column (placeholder one with more logic in it), 
    // 11th (priority), 12th (fellows approved), 13th (Leg Team Approved),
    // 14th (approved for signon), and 15th (sent co-spons req).
  
    range.sort(
      [
        {column: 8, ascending: false}, 
        {column: 9, ascending: true}, //renumbered the yeses, nos, and maybes
                                       // so that it'd sort nicer
        {column: 10, ascending: true},
        {column: 11, ascending: true},
        {column: 12, ascending: true},
        {column: 13, ascending: true},
      ]
    );
  }
}