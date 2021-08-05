
// fs.readdir(process.env.FOLDER_SRC, (err,res)=>{
//   if(err){
//     return console.log(err);
//   }
//   const files = res
//   files.forEach((file)=>{
    
//     try {

//       var targetFile = path.resolve(des_dir, file);
//       console.log('before if');
//       if ( fs.existsSync(targetFile)) {
//           console.log('if one');
//         if (fs.lstatSync(targetFile).isDirectory()) {
//             console.log('if 2');
//              targetFile = path.join( targetFile, path.basename( path.resolve(src_dir, file) ) );
//             console.log(targetFile);
//         }
//       }
//       // const content = fs.readFile(path.resolve(src_dir, file),'utf8')
//       // fs.writeFile(des_dir,content,{ flag: 'a' }) 
//     //   fs.writeFile(path.resolve(des_dir, file), fs.readFileSync(path.resolve(src_dir, file)));
//     } catch (error) {
//       console.log(err);
//     }
//   })
// })