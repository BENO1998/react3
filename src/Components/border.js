import React from "react";
import Sidebarcomponent from './Sidebar';
import Topbar from "./Topbar";
function borders(){
    return(
        // <!-- Page Wrapper -->
        <div id="wrapper">
    
            {/* <!-- Sidebar --> */}
            <Sidebarcomponent/>
            {/* <!-- End of Sidebar --> */}
    
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
    
                {/* <!-- Main Content --> */}
                <div id="content">
    
                    {/* <!-- Topbar --> */}
                    <Topbar/>
                    {/* <!-- End of Topbar --> */}
    
                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">
    
                        {/* <!-- Page Heading --> */}
                        <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
                        <p className="mb-4">Bootstrap's default utility classNamees can be found on the official <a
                                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                            below were created to extend this theme past the default utility classNamees built into Bootstrap's
                            framework.</p>
    
                        {/* <!-- Content Row --> */}
                        <div className="row">
    
                            {/* <!-- Border Left Utilities --> */}
                            <div className="col-lg-6">
    
                                <div className="card mb-4 py-3 border-left-primary">
                                    <div className="card-body">
                                        .border-left-primary
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-secondary">
                                    <div className="card-body">
                                        .border-left-secondary
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-success">
                                    <div className="card-body">
                                        .border-left-success
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-info">
                                    <div className="card-body">
                                        .border-left-info
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-warning">
                                    <div className="card-body">
                                        .border-left-warning
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-danger">
                                    <div className="card-body">
                                        .border-left-danger
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-left-dark">
                                    <div className="card-body">
                                        .border-left-dark
                                    </div>
                                </div>
    
                            </div>
    
                            {/* <!-- Border Bottom Utilities --> */}
                            <div className="col-lg-6">
    
                                <div className="card mb-4 py-3 border-bottom-primary">
                                    <div className="card-body">
                                        .border-bottom-primary
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-secondary">
                                    <div className="card-body">
                                        .border-bottom-secondary
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-success">
                                    <div className="card-body">
                                        .border-bottom-success
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-info">
                                    <div className="card-body">
                                        .border-bottom-info
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-warning">
                                    <div className="card-body">
                                        .border-bottom-warning
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-danger">
                                    <div className="card-body">
                                        .border-bottom-danger
                                    </div>
                                </div>
    
                                <div className="card mb-4 py-3 border-bottom-dark">
                                    <div className="card-body">
                                        .border-bottom-dark
                                    </div>
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
                    {/* <!-- /.container-fluid --> */}
    
                </div>
                </div>
                </div>
    );
}
export default borders;