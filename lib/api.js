const fs = require('fs');
import matter from 'gray-matter'



export function getPage(slug) {
    
    const path = `${process.cwd()}/_pages/${slug}.md`;    

    if(fs.existsSync( path )) {

        const file = fs.readFileSync( path );        

        const {data, content} = matter(file.toString());
        
        return {       
            data,
            content
        };
    }
}