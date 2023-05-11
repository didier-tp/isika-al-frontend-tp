
import jwtUtil from './jwt-util.js';

import express from 'express';
const apiRouter = express.Router();



function verifTokenInHeadersForPrivatePath(req , res  , next ) {
    if(  !req.path.includes("/private/"))
       next();
    else 
       verifTokenInHeaders(req,res,next);//if secureMode==true
}

// verif bearer token in Authorization headers of request :
function verifTokenInHeaders(req , res  , next ) {
    jwtUtil.extractSubjectWithRolesClaimFromJwtInAuthorizationHeader(req.headers.authorization)
    .then((claim)=>{
        if(checkAuthorizedPathFromRolesInJwtClaim(req.path, claim))
            next(); //ok valid jwt and role(s) in claim sufficient for authorize path
        else
            res.status(401).send("Unauthorized (valid jwt but no required role)");
    })
    .catch((err)=>{res.status(401).send({ error: "Unauthorized "+err?err:"" });});//401=Unauthorized or 403=Forbidden
}

function checkAuthorizedPathFromRolesInJwtClaim(path,claim)/*:boolean*/{
    //console.log("path: " + path);
    //console.log("claim in jwt :" + JSON.stringify(claim));
    if(claim == null) return false;
    //if(claim.roles == null || claim.roles=="") return true; //pas de verif vis à vis des rôles (simple jwt valide)
    let authorized = true;//avec nouvelle convention d'url sans role_xxx
    return authorized;
}

export  default { apiRouter , verifTokenInHeadersForPrivatePath };



