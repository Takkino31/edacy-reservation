import fs from 'fs';
function walk (dir){
    let results = []
    let list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir +'/'+file
        let stat = fs.statSync(file)
        if (stat && stat.isDirectory())
            results = results.concat(walk(file))
        else
            results.push(file)
    })
    return results
}
export{walk}