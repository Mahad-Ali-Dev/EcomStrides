export const dynamic = 'force-dynamic';

import { Settings, Bell, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Platform Settings</h1>
                <p className="text-white/40 text-sm">Manage your account preferences and system configurations.</p>
            </div>

            <div className="space-y-6">
                {/* Profile Section */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#FA8112]/10 flex items-center justify-center">
                            <User className="text-[#FA8112]" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Admin Profile</h2>
                            <p className="text-white/40 text-sm">Update your personal information</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                        <div className="space-y-2">
                            <Label className="text-white/60">Full Name</Label>
                            <Input defaultValue="Admin User" className="bg-white/5 border-white/10 text-white focus:border-[#FA8112]" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-white/60">Email Address</Label>
                            <Input defaultValue="admin@ecomstride.com" className="bg-white/5 border-white/10 text-white focus:border-[#FA8112]" />
                        </div>
                        <div className="col-span-2">
                            <Button className="bg-[#FA8112] text-white hover:bg-[#e0710f]">Save Changes</Button>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 opacity-60 pointer-events-none">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Bell className="text-white/40" size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Notifications</h2>
                            <p className="text-white/40 text-sm">Control email and push alerts (Coming Soon)</p>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 opacity-60 pointer-events-none">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Shield className="text-white/40" size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Security</h2>
                            <p className="text-white/40 text-sm">2FA and Password management (Coming Soon)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
