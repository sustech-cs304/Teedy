define({
  "name": "Teedy API",
  "title": "Teedy API",
  "url": "/api",
  "template": {
    "withCompare": false,
    "withGenerator": false
  },
  "order": [
    "User",
    "Group",
    "Document",
    "File",
    "Tag",
    "Comment",
    "Share",
    "Acl",
    "Auditlog",
    "App",
    "Theme",
    "Vocabulary"
  ],
  "header": {
    "title": "Getting started",
    "content": "<p>The web client and Android application for <strong>Teedy</strong> are only examples\nof what is possible with the provided REST API. Everything you see in those apps are\naccessible using the API.</p>\n<p>This documentation is divided in two parts. The first will get you started on essentials\nsteps like authentication and the second part is a full reference of every endpoints.</p>\n<h2>API URL</h2>\n<p>The base URL depends on your server. If your instance of Teedy is accessible through\n<code>https://teedy.mycompany.com</code>, then the base API URL is <code>https://teedy.mycompany.com/api</code>.</p>\n<h2>Verbs and status codes</h2>\n<p>The API uses RESTful verbs.</p>\n<table>\n<thead>\n<tr>\n<th>Verb</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>GET</code></td>\n<td>Select one or more items</td>\n</tr>\n<tr>\n<td><code>PUT</code></td>\n<td>Create a new item</td>\n</tr>\n<tr>\n<td><code>POST</code></td>\n<td>Update an item</td>\n</tr>\n<tr>\n<td><code>DELETE</code></td>\n<td>Delete an item</td>\n</tr>\n</tbody>\n</table>\n<p>Successful calls return a HTTP code 200, anything else if an error.</p>\n<h2>Dates</h2>\n<p>All dates are returned in UNIX timestamp format in milliseconds.</p>\n<h2>Authentication</h2>\n<h4><strong>Step 1: <a href=\"#api-User-PostUserLogin\">POST /user/login</a></strong></h4>\n<p>A call to this endpoint will return a cookie header. Here is a CURL example:</p>\n<pre><code>curl -i -X POST -d username=admin -d password=admin https://docs.mycompany.com/api/user/login\nSet-Cookie: auth_token=64085630-2ae6-415c-9a92-4b22c107eaa4\n</code></pre>\n<h4><strong>Step 2: Authenticated API calls</strong></h4>\n<p>All following API calls must have a cookie header supplying the given token. Here is a CURL example:</p>\n<pre><code>curl -i -X GET -H &quot;Cookie: auth_token=64085630-2ae6-415c-9a92-4b22c107eaa4&quot; https://docs.mycompany.com/api/document/list\n{&quot;total&quot;:12,&quot;documents&quot;:[...]}\n</code></pre>\n<h4><strong>Step 3: <a href=\"#api-User-PostUserLogout\">POST /user/logout</a></strong></h4>\n<p>A call to this API with a given <code>auth_token</code> cookie will make it unusable for other calls.</p>\n<pre><code>curl -i -X POST -H &quot;Cookie: auth_token=64085630-2ae6-415c-9a92-4b22c107eaa4&quot; https://docs.mycompany.com/api/user/logout\n</code></pre>\n<h2>Document search syntax</h2>\n<p>The <code>/api/document/list</code> endpoint use a String <code>search</code> parameter, useful when the query is entered by a human.</p>\n<p>This parameter is split in segments using the space character (the other whitespace characters are not considered).</p>\n<p>If a segment contains exactly one colon (<code>:</code>), it will be used as a field criteria (see bellow).\nIn other cases (zero or more than one colon), the segment will be used as a search criteria for all fields including the document's files content.</p>\n<h3>Search fields</h3>\n<p>If a search <code>VALUE</code> is considered invalid, the search result will be empty.</p>\n<ul>\n<li>Content\n<ul>\n<li><code>full:VALUE</code>: <code>VALUE</code> is used as search criteria for all fields, including the document's files content</li>\n<li><code>simple:VALUE</code>: <code>VALUE</code> is used as a search criteria for all fields except the document's files content</li>\n</ul>\n</li>\n<li>Date\n<ul>\n<li><code>after:VALUE</code>: the document must have been created after or at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code></li>\n<li><code>at:VALUE</code>: the document must have been created at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code> (for <code>yyyy</code> it must be the same year, for <code>yyyy-MM</code> the same month, for <code>yyyy-MM-dd</code> the same day)</li>\n<li><code>before:VALUE</code>: the document must have been created before or at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code></li>\n<li><code>uafter:VALUE</code>: the document must have been last updated after or at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code></li>\n<li><code>uat:VALUE</code>: the document must have been updated at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code> (for <code>yyyy</code> it must be the same year, for <code>yyyy-MM</code> the same month, for <code>yyyy-MM-dd</code> the same day)</li>\n<li><code>ubefore:VALUE</code>: the document must have been updated before or at the <code>VALUE</code> moment, accepted format are <code>yyyy</code>, <code>yyyy-MM</code> and <code>yyyy-MM-dd</code></li>\n</ul>\n</li>\n<li>Language\n<ul>\n<li><code>lang:VALUE</code>: the document must be of the specified language (example: <code>en</code>)</li>\n</ul>\n</li>\n<li>Mime\n<ul>\n<li><code>mime:VALUE</code>: the document must be of the specified mime type (example: <code>image/png</code>)</li>\n</ul>\n</li>\n<li>Shared\n<ul>\n<li><code>shared:VALUE</code>: if <code>VALUE</code> is <code>yes</code>the document must be shared, for other <code>VALUE</code>s the criteria is ignored</li>\n</ul>\n</li>\n<li>Tags: several <code>tags</code> or <code>!tag:</code> can be specified and the document must match all filters\n<ul>\n<li><code>tag:VALUE</code>: the document must contain a tag or a child of a tag that starts with <code>VALUE</code>, case is ignored</li>\n<li><code>!tag:VALUE</code>: the document must not contain a tag or a child of a tag that starts with <code>VALUE</code>, case is ignored</li>\n</ul>\n</li>\n<li>Titles: several <code>title</code> can be specified, and the document must match any of the titles\n<ul>\n<li><code>title:VALUE</code>: the title of the document must be <code>VALUE</code></li>\n</ul>\n</li>\n<li>User\n<ul>\n<li><code>by:VALUE</code>: the document creator's username must be <code>VALUE</code> with an exact match, the user must not be deleted</li>\n</ul>\n</li>\n<li>Workflow\n<ul>\n<li><code>workflow:VALUE</code>: if <code>VALUE</code> is <code>me</code> the document must have an active route, for other <code>VALUE</code>s the criteria is ignored</li>\n</ul>\n</li>\n</ul>\n"
  },
  "version": "1.5.0",
  "description": "Lightweight document management system",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2025-04-28T06:31:10.992Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
