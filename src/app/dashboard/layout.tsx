// import Notifications from './@notifications/page';
// import RevenuMetrics from './@revenue/page';
// import UserAnalytics from './@users/page';

export default function DashboardLayout({
    children,
    notifications,
    revenue,
    users,
    login,
}: Readonly<{
    children: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
    login: React.ReactNode;
}>) {
    const isLoggedin = true;
    return isLoggedin ? (
        <div className="container mx-auto">
            <div>{children}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}
