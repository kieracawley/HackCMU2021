# HackCMU2021

#manifest.json file code
{
  "name": "Getting Started Example",
  "description": "TBD",
  "version": "1.0",
  "manifest_version": 3
} 
"content_scripts": [
  {
    "matches": [
      "<all_urls>"
    ],
    "js": ["content.js"] ###This is going to tell manifest.json to inject content.js
  }
]

