<link rel="stylesheet" type="text/css" href="../index.css">

Assembling a Repo
=================

  
Repositories are made completely in JSON. For a more complete outline, look at "repo.json" provided on GitHub.  
  
**"titlecard"** is the title of the whole repository.  
  
**"results"** is the array that contains the entire repository information in objects. The only item not in the array is "titlecard".  
**"title"** is the title of an item. **"des"** is the description.  
  
Badges are further explained below. These are booleans and can be removed if not needed.  
**"run"** is the JavaScript function executed when the item is clicked on. Use "change(url)" to use the workspace.  
  

Badges
------

**func** \- Indicates a function that runs in the browser  
**approve** \- Indicates an approved/verified item  
**utility** \- Indicates a client side function  
**secure** \- Indicates a private item (handling has to be done by file hoster)  
**group** \- Indicates a package  
**learn** \- Indicates a learning resource (like this>  
**pro** \- Adds a meaningless "PRO" badge
