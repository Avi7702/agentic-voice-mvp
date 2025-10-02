import Link from 'next/link'
import { Phone, TrendingUp, Activity, CheckCircle, Plus, Users, Clock, BarChart3 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Agentic Voice</span>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/dashboard" className="text-primary-600 font-medium border-b-2 border-primary-600 pb-1">
                Dashboard
              </Link>
              <Link href="/dashboard/agents" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Agents
              </Link>
              <Link href="/dashboard/calls" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Call History
              </Link>
              <Link href="/dashboard/analytics" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Analytics
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                U
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your AI voice agents performance</p>
          </div>
          <Link
            href="/dashboard/agents/create"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-all hover:scale-105 font-medium shadow-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Agent
          </Link>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Agents */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+12%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Agents</h3>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-gray-500 text-sm mt-2">18 active, 6 draft</p>
          </div>

          {/* Calls Today */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+8%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Calls Today</h3>
            <p className="text-3xl font-bold text-gray-900">847</p>
            <p className="text-gray-500 text-sm mt-2">Avg 6.2 min duration</p>
          </div>

          {/* Active Calls */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600 animate-pulse" />
              </div>
              <span className="text-orange-600 text-sm font-medium">Live</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Calls</h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
            <p className="text-gray-500 text-sm mt-2">Across 8 agents</p>
          </div>

          {/* Success Rate */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+2.4%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Success Rate</h3>
            <p className="text-3xl font-bold text-gray-900">94.8%</p>
            <p className="text-gray-500 text-sm mt-2">Last 7 days</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <Link href="/dashboard/calls" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium">Customer Service Agent</p>
                  <p className="text-gray-600 text-sm">Successfully handled call from +1 (555) 123-4567</p>
                  <p className="text-gray-500 text-xs mt-1">2 minutes ago • 4:32 duration</p>
                </div>
                <span className="text-green-600 text-sm font-medium">Resolved</span>
              </div>

              {/* Activity Item 2 */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium">Sales Agent</p>
                  <p className="text-gray-600 text-sm">New agent created and deployed</p>
                  <p className="text-gray-500 text-xs mt-1">15 minutes ago</p>
                </div>
                <span className="text-blue-600 text-sm font-medium">Live</span>
              </div>

              {/* Activity Item 3 */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium">Support Agent</p>
                  <p className="text-gray-600 text-sm">Call transferred to human operator</p>
                  <p className="text-gray-500 text-xs mt-1">23 minutes ago • 8:15 duration</p>
                </div>
                <span className="text-orange-600 text-sm font-medium">Escalated</span>
              </div>

              {/* Activity Item 4 */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium">Product Info Agent</p>
                  <p className="text-gray-600 text-sm">Successfully handled call from +1 (555) 987-6543</p>
                  <p className="text-gray-500 text-xs mt-1">1 hour ago • 3:47 duration</p>
                </div>
                <span className="text-green-600 text-sm font-medium">Resolved</span>
              </div>
            </div>
          </div>

          {/* Active Agents */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Agents</h2>
              <span className="text-xs text-gray-500">18 live</span>
            </div>

            <div className="space-y-4">
              {/* Agent 1 */}
              <div className="p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">Customer Service</p>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-gray-600 mb-2">+1 (555) 001-0001</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>3 active calls</span>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">Sales Agent</p>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-gray-600 mb-2">+1 (555) 001-0002</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>2 active calls</span>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">Support Agent</p>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-gray-600 mb-2">+1 (555) 001-0003</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>1 active call</span>
                </div>
              </div>

              {/* View All Button */}
              <Link
                href="/dashboard/agents"
                className="block w-full text-center py-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                View All Agents →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
