import React from "react";
import "./Plan.css";

function Plan(props: any) {
  const { activePlan } = props;
  const [plans, setplans] = React.useState([
    {
      Planname: "Free Plan",
      Amount: "0",
      Type: "per user/year",
      MainDesc: "Get 5 live homeowner leads.",
      Details: [
        "Access to client solar savings report",
        "Access to client address & telephone.",
        "Fermentum arcu risus augue.",
        "Fermentum arcu risus augue.",
      ],
    },
    {
      Planname: "Subscription",
      Amount: "2400",
      Type: "per user/year",
      MainDesc: "Tellus ante at sem nisl nulla dui.",
      Details: [
        "Augue eu dolor lectus ultrices.",
        "Ultricies imperdiet sit dolor.",
        "Fermentum arcu risus augue.",
        "Fermentum arcu risus augue.",
      ],
    },
    {
      Planname: "Pay as you Go",
      Amount: "4500",
      Type: "per user/year",
      MainDesc: "Tellus ante at sem nisl nulla dui.",
      Details: [
        "Augue eu dolor lectus ultrices.",
        "Ultricies imperdiet sit dolor.",
        "Fermentum arcu risus augue.",
        "Fermentum arcu risus augue.",
      ],
    },
  ]);

  return (
    <div className="ProfileWrapper">
      <div className="ProfileHeader">Plan</div>
      <div className="ProfileContent">
        <div className="PlanWrapper">
          <div className="PlanName">Free Plan</div>
          <div className="PlanAmount">$0</div>
          <div className="PlanType">per user/year</div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
