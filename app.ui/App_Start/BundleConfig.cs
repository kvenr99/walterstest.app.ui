using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.UI;

namespace app.ui
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/App-Company").Include("~/App/CompanyApp/company.app.js",
                "~/App/CompanyApp/company.controller.js",
                "~/App/CompanyApp/Account/account.Controller.js",
                "~/App/CompanyApp/Account/account.Service.js",
                "~/App/CompanyApp/Account/Common/accountDetails.directive.js"));
        }
    }
}