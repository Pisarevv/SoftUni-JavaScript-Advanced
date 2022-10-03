
function fromJSONToHTMLTable(input){
    let result = '<table>' + '\n';
    let inputArray = JSON.parse(input);
    let extractedProperties = Object.keys(inputArray[0]);
    result+= '   <tr>';
    for(let property of extractedProperties){
        result += `<th>${escapeHtml(property)}</th>`;
    }
    result+= '</tr>';
    result+= '\n';
    for(let element of inputArray){
        result += `   <tr>`;
        for(let property of Object.values(element)){
            result+= `<td>${escapeHtml(property.toString())}</td>`;
        }
        result+= '</tr>';
        result+= '\n';
    }
    result += '</table>'
    return result;


    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }
}


fromJSONToHTMLTable(`[{"Name":"Stamat>",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);