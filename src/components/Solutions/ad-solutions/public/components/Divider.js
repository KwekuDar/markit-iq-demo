import React from 'react'
import "../css/divider.css"
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ApprovalIcon from "@mui/icons-material/Approval";

export const Divider = () => {
  return (
    <div className="Divider">
      <div className="Divider-content">
        <div className="Divider-text1">
          <AppRegistrationIcon style={{ fontSize: "70px", color: "#b643fa" }} />
          <h3>Cost Per Click</h3>
          <p className="Divider-p">
            In today’s competitive market, <br/> both advertiser and publisher benefit
            when your  ad is clicked. Unlike the cost per lead or cost per
            acquisition, CPC means you pay whenever, and only if your ad is
            “clicked”.
          </p>
        </div>
        <div className="Divider-text">
          <h2>Did You Know ?</h2>
          <AppShortcutIcon style={{ fontSize: "70px", color: "#b643fa" }} />
          <h3>Cost Per View</h3>
          <p className="Divider-p">
            CPV is a cost for just a single view. Your audience encounters CPV
            with campaign video ad pop-ups and pop-unders.
          </p>
        </div>
        <div className="Divider-text1">
          <ApprovalIcon style={{ fontSize: "70px", color: "#b643fa" }} />
          <h3>Cost Per Millie</h3>
          <p className="Divider-p">
            Simply put, CPM is a cost of your ad per 1000 impressions. An
            impression happens when the ad is successfully loaded on a viewed
            webpage or in an application..
          </p>
        </div>
      </div>
    </div>
  );
}
