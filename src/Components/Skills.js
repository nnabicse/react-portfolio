import React from 'react';
import js from '../../src/images/skills/js.png'
import python from '../../src/images/skills/py.png'
import react from '../../src/images/skills/react.jpg'
import node from '../../src/images/skills/node.jpg'
import express from '../../src/images/skills/express.png'
import mongo from '../../src/images/skills/mdb.jpg'
import bs5 from '../../src/images/skills/bstrapimg.png'
import twind from '../../src/images/skills/tailwind.jpg'
import fire from '../../src/images/skills/firebase.png'
import git from '../../src/images/skills/github.png'
import fig from '../../src/images/skills/figma.png'
import vscode from '../../src/images/skills/vscode.png'
import codeblocks from '../../src/images/skills/codeblocks.png'
import ubuntu from '../../src/images/skills//ubuntu.png'
import mint from '../../src/images/skills/mint.png'
import win from '../../src/images/skills/windows.png'

const Skills = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>Skills</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={js} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid" src={python} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={react} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={node} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={express} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={mongo} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={bs5} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={twind} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={fire} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={git} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={vscode} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={codeblocks} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={fig} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={ubuntu} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={mint} alt="" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <img className="img-fluid w-100" src={win} alt="" />
                    </div>
                </div>
                {/* <div className='row'>
                <div className='text-center'>
                    <button className='btn btn-primary col-sm-12 col-md-2 col-lg-2'>All Skills</button>
                </div>
            </div> */}

            </div>
        </div>
    );
};

export default Skills;