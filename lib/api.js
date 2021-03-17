const fs = require('fs');
import matter from 'gray-matter'

const PAGES = `${process.cwd()}/_pages`;

const ARTICLES = `${process.cwd()}/articles`;

export function getPage(slug) {        
    return getFile(`${PAGES}/${slug}.md`);  
}

export function getPost(slug) {    
    return getFile(`${ARTICLES}/${slug}.md`);    
}

export function getPosts(limit) {
    
    const files = fs.readdirSync(ARTICLES);
        
    return files.splice(0, limit).map( f => getFile(`${ARTICLES}/${f}`));
}

export function getAllArticlePaths() {
    const f = fs.readdirSync(ARTICLES);
    return f.map( name => {
        return {
            params: {
                slug: name.replace('.md', '')
            }
        }
    });
}

export function getFile(path) {
    if(fs.existsSync( path )) {

        const file = fs.readFileSync( path );        

        const {data, content} = matter(file.toString());

        for( let key in data ) {
            data[key] = data[key].toString();
        }

        data.slug = path.split('/').reverse()[0].replace('.md', '');
        
        return {       
            data,
            content
        };
    }
    else {
        return false;
    }   
}