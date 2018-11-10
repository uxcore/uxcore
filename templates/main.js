<% for (var i = 0; i < ComponentNames.length; i++) {
%>const <%= ComponentNames[i] %> = require('./lib/<%= ComponentNames[i] %>');
<% } %>

<% for (var i = 0; i < ComponentNames.length; i++) {
%>exports.<%= ComponentNames[i] %> = <%= ComponentNames[i] %>;
<% } %>

module.exports =  {
  <% for (var i = 0; i < ComponentNames.length; i++) {
  %><%= ComponentNames[i] %>,
  <% } %>
};