import { Feature, BulletPoint, Option, Metadata } from './metadatatype';

//![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png "GitHub Logo")

// Metadata object that defines the content of the page
const metadata: Metadata = {

  name: "fLogViewer v 2",

  logo: "/images/fLogViewer.Logo.DALL-E.Animation.gif",

  overview_header: `**fLogViewer** is a freeeeeeeeeeeeeeeeeeee Windows program which allows to visualize local 
      text file content or script execution result of`,

  overview_image: "/images/multi%20type%20of%20log%20view%20demo.00.jpg",

  overview_bullet_points: [

    {
      text: "Microsoft SQL Server Transact-SQL queries.",
      video_link: "https://www.youtube.com/watch?v=6faMwzpi8AQ",
      video_link_2: "https://www.youtube.com/watch?v=pxnZ1M7P8Is",
    },
    {
      text: "DocumentDB queries.",
      video_link: null
    },
    {
      text: "Application Insight (Kusto Queries).",
      video_link: null
    },
    {
      text: "REDIS queries.",
      video_link: "https://www.youtube.com/watch?v=Y_RMZcJZN5M"
    },
    {
      text: "SUMO queries.",
      video_link: "https://www.youtube.com/watch?v=rHM62Rw6aFY"
    },
    {
      text: "Azure storage, containers, container, folder or file.",
      video_link: null
    },
    {
      text: "HTTP Script.",
      video_link: "https://www.youtube.com/watch?v=nSPMk2Rdrrg",
      video_link_2: "https://www.youtube.com/watch?v=9lBcwvKBDV8"
    },
    {
      text: "HTTP GET call.",
      video_link: "https://www.youtube.com/watch?v=nd0Epf6a8mY"
    },
    {
      text: "Windows file system: Directory, sub directories and files.",
      video_link: "https://www.youtube.com/watch?v=1y9VFTgnZag"
    },
    {
      text: "Local Text log file (include text file aggregation).",
      video_link: "https://www.youtube.com/watch?v=OB7Rh7xIYnU"
    }
  ],

  overview_bullet_points_2: [
    { text: "Live update." },
    { text: "Color coding.", image_link: "/images/i2025.ColorCoding.1.JPG" },
    { text: "Filtering.", image_link: "/images/i2025.Filtering.1.JPG", image_link_2: "/images/i2025.Filtering.2.JPG" },
    { text: "Search.", image_link: "/images/i2025.Search.1.JPG" },
    { text: "Export to Text or HTML with color coding.", image_link: "/images/i2025.Export.1.JPG" },
  ],

  overview_footer: ``,

  download_button: {
    "title": "Download"
  },
  features: [
    {
      title: "File Monitoring With Color Coding",
      description: `
**fLogViewer** is a free Windows program which allows one to visualize and analyze log files. It supports various log formats, including text files, SQL Server query results, and Azure DocumentDB queries. The program provides features such as syntax highlighting, filtering, and searching to help users quickly find relevant information in their logs.
`,
      image_link: "/images/db%20query%20demo.jpg",
      code_sample: null,
      video_link: "https://www.youtube.com/watch?v=OB7Rh7xIYnU"
    },
    {
      title: "HTTP Script Execution",
      description: `fLogViewer can execute HTTP GET, POST, PUT and DELETE via the following script syntax.`,
      image_link: "/images/httpScriptExecution.png",
      code_sample: `contentType application/json
accept  application/json

/* Querying Azure Search HTTP API */
set $serviceName fai-search
set $ApiKey     ABCDEFZTq4qAGNWEziAX4dLwwsZ
set $indexName  fred-city-test-index

headers api-key: $ApiKey
post https://$serviceName.search.windows.net/indexes/$indexName/docs/search?api-version=2016-09-01

/* More Examples */
// Getting fLogViewer current version
get https://flogviewer2026.blob.core.windows.net/build/Version.cs
put https://httpbin.org/delay/2
delete https://httpbin.org/delay/2`,
    },
    {
      title: "Aggregated Files Monitoring",
      description: `
The feature Aggregated File (CTRL+SHIFT+O) allow to select a directory, from there fLogviewer will find all '*.log,*.txt' files and sort all lines by extracting the timestamp, and produce one output log file.
The file produced is then monitored as a single normal file. Every refresh period fLogViewer compute the delta changes and update the output log file.
In the current version the timestamp (or key) is extracted by splitting on '|' or '\t' and using the first value. This will be customizable in the future.
      `,
      image_link: null,
      code_sample: null,
    },
    {
      title: "Monitoring Multiple URL",
      description: `
**fLogViewer** can execute every x seconds one HTTP GET call per windowand returns the result as text
* URL
* Status Code
* Headers
* Body
`,
      image_link: "/images/url%20monitor.jpg",
      code_sample: null,
    },
    {
      title: "Microsoft SQL Server Database Monitoring",
      description: `
**fLogViewer** can execute every x seconds a SQL-Transact script and display the returned tables in 
a formatted way. The connection string is defined in the script as comment with the keyword 
***'ConnectionString:'***.`,
      image_link: "/images/sql%20provider%20demo.jpg",
      code_sample: `-- ConnectionString: Server=.;Database=ContosoRetailDW;Trusted_Connection=True; 

-- Display the 10 last products updated 
select 'Last 10 product updates' -- Display a header 
select top 10 * from [dbo].[DimProduct] order by UpdateDate desc -- Display the table 

select 'Employee' -- Display a message 
select top 10 * from [dbo].[DimEmployee] order by UpdateDate desc -- Display the table`,
    },
    {
      title: "Microsoft DocumentDB Database Monitoring",
      description: `
**fLogViewer** can execute every x seconds a series of DocumentDB queries and display the returned tables in 
a formatted way. The connection string is defined in the script as comment with the keyword 
***'DocumentDB:'***.
      `,
      image_link: "/images/DocumentDB%20Demo.jpg",
      code_sample: `-- fred-cosmos-2 DocumentDB: https://xxxx-cosmos-2.documents.azure.com:443/ ABCDEFZTq4qAGNWEziAX4dLwwsZcjVsHKlhQZ83weHhD3CcrjQBeSYafHPh2KYmTLA==
use ToDoList Items

select ''
select 'ToDoList Items' 

select COUNT(c) Count FROM c
SELECT * FROM c
SELECT * FROM c WHERE c.id = 'Andersen.1'`,
    },
    {
      title: "Microsoft Application Insights Monitoring",
      description: `
fLogViewer can execute every x seconds a series of App Insights Kusto queries and display the returned tables in a formatted way. The connection string is defined in the script as comment with the keyword 'AppInsights:'.            
      `,
      image_link: "/images/App%20Insights%20Demo.jpg",
      code_sample: `-- fLogViewer AppInsights: AppInsights

select ''
select '    A P P   I N S I G H T - fLogviewer'
select ''
select ' - An Introduction To Kusto Query Language  (https://ask.sqlservercentral.com/index.html)'

-- PT30M, PT1H, PT4H, PT2H30M, P7D
--   App Insight instance   App Id                                 Api Key: The Api Key is created using the API section of the app insight instance in the portal
use  fLogViewer             1332b71a-7a05-46d4-a131-77777777777    nxwdoyfzl2aoql6katq830uhonzxabcdefrthgl

timespan PT4H
query traces | where message contains "Started" | top 100 by timestamp desc 

timespan P7D
query exceptions | where outerType contains "NullReferenceException" or outerType contains "ArgumentException" | top 100 by timestamp desc`,
    },
    {
      title: "REDIS Monitoring",
      description: `**fLogViewer** can execute every x seconds a series of REDIS commands or queries and display the returned tables in a formatted way. The connection string is defined in the script as comment with the keyword 'Redis:'.            `,
      image_link: "/images/Monitor%20REDIS.PNG",
      code_sample: `-- QA-ENV Redis: myRedis.redis.cache.windows.net:6380 fNO0fHlTUzE= ssl=true

keys a* -- Query the REDIS database for a all key starting with a 'a'

client_list -- Render the result of REDIS command client list
info_all  -- Render the result of REDIS command info all

-- How to create key
setString myName myValue
setList fList 1,2,3,4,5,6,7,8 30
setHash fuser:999 username=martina,firstName=Martina,lastName=Elisa,country=GB 30
setString fredis_debug_mode true 60
del fList

-- pub sub
sub fredchannel
pub fredchannel this is the message `,
    },
    {
      title: "SUMO Monoitoring",
      description: `**fLogViewer** can execute every x seconds a series of SUMO queries and display the returned tables in a formatted way. The connection string is defined in the script as comment with the keyword ***'Sumo:'***.`,
      image_link: "/images/DirectoryMonitoring.jpg",
      code_sample: `-- QA-ENV Sumo: Sumo ACCESS_ID ACCESS_KEY

limit 1000 -- Max row returned by resultset 

-- List of columns to display
columns  _messagetime _collector _sourcecategory cs_uri_stem  cs_uri_query _raw

timespan 2023-06-09 2022-06-09 -- Start/end of day
timespan PT60M -- Past 60 minutes
timespan PT1H -- Past 1 hour

prequery (_sourceCategory=qa-environment*) 
query "services.accounting"

query | count _sourceCategory | sort by _count`,
    },
    {
      title: "File System Directory Monitoring",
      description: `**fLogViewer** can execute every x seconds query for the state of Windows directory and display the content sub directories and files.`,
      image_link: "/images/DirectoryMonitoring.jpg",
      code_sample: null,
    },
    {
      title: "Azure Storage Monitoring",
      description: `
**fLogViewer** can execute every x seconds query for the state of
- Azure storage and display all containers and their content
- One Azure Storage container
- One text file in an Azure storage container
      `,
      image_link: "/images/Azure%20Storage%20View.jpg",
      code_sample: null,
    },
    {
      title: "IIS Log, CSV file",
      description: `
flogViewer allows to visualize line rows/columns based text file like IIS log file (AKA Extended Log Format), CSV File or Tab separated value file, with a column header definition.
      `,
      image_link: "/images/iis%20demo.jpg",
      code_sample: null,
    },
    {
      title: "Color Coding Editor",
      description: `
The color coding editor allows to define rules to determine the display color and the boldness of the line.
    

- A rule apply if the line contains a piece of text or if a regular expression match a line. (Free Spacing Regular Expression's Video)
- A rule can specify the extension of the log file or apply to all files
- A rule can ignore the case
- Regular expression use the mode called Free-Spacing (see below)
- Rules are evaluated in sequential order, the first match stop the evaluation            
      `,
      image_link: "/images/color%20coding%20editor%2000.jpg",
      video_link: "https://www.youtube.com/watch?v=S40VtkPhkWs",
      code_sample: null,
    },
    {
      title: "Filter Editor",
      description: `
The filter editor allows to create, update or delete filter to select or exclude a set of line from a log file.
- A filter apply if the line contains a piece of text or if a regular expression match a line. (Free Spacing Regular Expression's Video)
- Regular expression use the mode called Free-Spacing (see below)
- In bookmark mode the line are displayed with a different background color
      `,
      image_link: "/images/i2025.Filtering.1.JPG",
      code_sample: null,
      video_link: "https://www.youtube.com/watch?v=S40VtkPhkWs",
    },
    {
      title: "Regular Expression",
      description: `
**fLogviewer** uses regular expression for
- Color coding rule
- Filter rule
- Search
 

**fLogViewer** uses a regular expression mode called "free-spacing" (To learn more click on the following links  1 ,  2 ). In a nutshell,
- The space char ' ' and carriage return char can be use to format the regular expression (space indentation)
- The character '#' can be use to start a comment line
- To define the space char ' ' in a regular expression, you must use: "\ "

fLogViewer also add a directive #define like a C pre-processor (Parameter are not supported). This allow to write more readable regular expression.            
      `,
      image_link: null,
      code_sample: `#define ERROR_IN_BRAKET ( \[ ERROR \] ) 
#define ERROR_IN_BAR ( \| ERROR \| ) 
#define FAILED_IN_BRAKET ( \[ FAILED \] ) 

# Define different error tokens 
   ERROR_IN_BRAKET | 
   ERROR_IN_BAR | 
   FAILED_IN_BRAKET | 
   ( \(fail\) ) |  
   ( Status:.4 )`,
    },
  ],
  options: [
    {
      title: "General Tab",
      description: `
In the General tab you setup
All refresh rate for the different type of viewer
Default text editor, fLogViewer can detect vsCode
The shortCut Ctrl+M, can insert a text mark in the current log file. You can define the mark here usingany characters and the following macros: [ENTER], [yyyy-mm-dd hh-mm-ss].
fLogViewer communicates to the Cloud
Start and shutdown,
The type of view open(File, Aggregated Files, URL, Directory, Transact-SQL Statments, Azure Storage),
All error messages displayed to the user.`,
      image_link: "/images/i2025.Options.1.JPG",
      code_sample: null,
    },
    {
      title: "Display Settings Tab",
      description: `
In the Display Settings tab, you setup
- Display line number and the format
- The font, size and padding. The shortcuts CTRL and + or CTRL and -, can also increase/decrease the font size on demand
- Before display, the Tab character can be replaced with X spaces
      `,
      image_link: "/images/i2025.Options.2.JPG",
      code_sample: null,
    },
    {
      title: "Archive Tab",
      description: `
In the Archive tab, you setup the automatic archive mode. When the archive mode is on, each time the user clear a log file, a copy is made and move to a specific Archive directory.
- Allow user to clear any log file. The shortcut F6 clear the current log file. The shortcut Shift and F6, clear all (and archive) all log files
- Archive the file or files before clearing
- Archive the file or files into a .Zip file before clearing
      `,
      image_link: "/images/i2025.Options.3.JPG",
      code_sample: null,
    },
    {
      title: "Cloud Settings Tab",
      description: `Allow to save or restore the filters and the color coding configuration in the cloud encrypted based on the Cloud ID.`,
      image_link: "/images/i2025.Options.4.JPG",
      code_sample: null,
    },
    {
      title: "AI Tab",
      description: `Allow to send to a ChatGPT API a prompt parameterized with the current text selection.

The text answer from ChatGPT can be translated to an audio voice.
      `,
      image_link: "/images/i2025.Options.5.JPG",
      code_sample: null,
    },
    {
      title: "Command Line",
      description: `
Arguments:
-splashScreen true|false. Do not display the splash screen if false
-wildcard "wildcard" Define which file extensions to load from one or more folders, Accept ';' as separator ("*.log;*.txt").
-file "file-name". Load a specific file.
-folder "path". Load files from a specific folder.
-folderRecursive "path". Load files from a specific folder and children folder.            
      `,
      code_sample: `
Loading specific files
Syntax: fLogViewer.exe -file filename1 [-file filename2] [-splashScreen false]

fLogViewer.exe -file c:\tmp\myFile1.log -file c:\tmp\myFile2.log -splashScreen false
Load all files from a one folder

Syntax: fLogViewer.exe -folder path -wildcard wildcard
fLogViewer.exe -folder "C:\MyFolder" -wildcard "*.log;*.txt"            
      `,
      image_link: null,
    },
  ],
  open_source_libraries: `
Icons from https://findicons.com
Magnifier2.ico icon, Icons-Land, Icon Pack: Base Software, Freeware, Link: https://findicons.com/pack/766/base_software
Weather_clouds.ico icon, Jack Cai, Icon Pack: Super Mono, Creative Commons Attribution (by), Link: http://www.doublejdesign.co.uk
find.png, VistaICO, icon Pack: VISTAICO TOOLBAR, Unknown License, Link: https://www.vistaico.com
gtk_color_picker.ico icon, deviantdark, Icon Pack: Oxygen-Refit, Unknown License, link: https://www.deviantart.com/deviantdark
settings.png icon, Artua.com, Icon Pack: Mac, Freeware Non-commercial, link: https://www.artua.com
filter.png, Everaldo Coelho, Icon Pack: Crystal Clear Actions, License: GNU/GPL, link: https://findicons.com/pack/719/crystal_clear_actions
refresh.png, Asher, Icon Pack: MinIcons, Creative Commons Attribution (by), link: https://www.deviantart.com/kyo-tux
Json.NET is open source under the MIT license and is free for commercial use. (https://www.newtonsoft.com/json)
Sprache, MIT License (https://github.com/sprache/Sprache)    
  `
};

export default metadata; 