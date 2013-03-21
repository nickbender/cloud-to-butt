walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	v = v.replace(/\bcloud services\b/g, "butt services")
	v = v.replace(/\bCloud Services\b/g, "Butt Services")
	v = v.replace(/\bCloud services\b/g, "Butt services")
	v = v.replace(/\bcloud-based\b/g, "butt")
	v = v.replace(/\bCloud-based\b/g, "Butt")
	v = v.replace(/\bCloud-Based\b/g, "Butt")
	
	textNode.nodeValue = v;
}


