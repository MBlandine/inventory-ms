'use client';

import DashboardLayout from "./"
// import DashboardNav from "../components/dashboard/DashboardNav";
import DashboardCards from "../components/dashboard/DashboardCards";
import MessagesSection from "../components/dashboard/MessagesSection";

export default function DashboardPage() {
    return(
        <DashboardLayout>
            <div className="dashboard-home">
                <DashboardCards/>
                <MessagesSection/>
            </div>
        </DashboardLayout>
    )
}