import React from 'react';

const Topbar: React.FC = () => {
    return (
        <div className=" sticky bg-gray-100 text-sm text-gray-700 py-2 border-b border-app_border">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>Express Delivery</div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:underline">
                        FAQ&apos;s
                    </a>
                    <span className="border-l border-gray-300 h-4"></span>
                    <a href="#" className="hover:underline">
                        Order Tracking
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;