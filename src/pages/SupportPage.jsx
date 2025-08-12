import React, { useState } from 'react';
import { Search, Plus, Clock, AlertCircle, CheckCircle, MessageSquare, User, Mail, Phone, HelpCircle } from 'lucide-react';

function SupportPage() {
    const [activeTab, setActiveTab] = useState('tickets');
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [ticketForm, setTicketForm] = useState({
        subject: '',
        category: '',
        priority: 'medium',
        description: '',
        email: '',
        name: ''
    });

    const [tickets, setTickets] = useState([
        {
            id: 'TK-001',
            subject: 'Login Issues',
            status: 'open',
            priority: 'high',
            created: '2 hours ago',
            category: 'Technical'
        },
        {
            id: 'TK-002',
            subject: 'Billing Question',
            status: 'in-progress',
            priority: 'medium',
            created: '1 day ago',
            category: 'Billing'
        },
        {
            id: 'TK-003',
            subject: 'Feature Request',
            status: 'resolved',
            priority: 'low',
            created: '3 days ago',
            category: 'General'
        }
    ]);

    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking the 'Forgot Password' link on the login page.",
            category: "Account"
        },
        {
            question: "How do I update my billing information?",
            answer: "Go to Settings > Billing to update your payment methods and billing details.",
            category: "Billing"
        },
        {
            question: "How do I contact support?",
            answer: "You can create a support ticket, use live chat, or email us at support@company.com.",
            category: "General"
        }
    ];

    const handleSubmitTicket = () => {
        if (!ticketForm.name || !ticketForm.email || !ticketForm.subject || !ticketForm.category || !ticketForm.description) {
            alert('Please fill in all required fields');
            return;
        }
        const newTicket = {
            id: `TK-${String(tickets.length + 1).padStart(3, '0')}`,
            subject: ticketForm.subject,
            status: 'open',
            priority: ticketForm.priority,
            created: 'Just now',
            category: ticketForm.category
        };
        setTickets([newTicket, ...tickets]);
        setTicketForm({
            subject: '',
            category: '',
            priority: 'medium',
            description: '',
            email: '',
            name: ''
        });
        setShowTicketForm(false);
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'open': return 'bg-red-100 text-red-800 border-red-200';
            case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'high': return 'text-red-600';
            case 'medium': return 'text-yellow-600';
            case 'low': return 'text-green-600';
            default: return 'text-gray-600';
        }
    };

    const filteredTickets = tickets.filter(ticket => 
        ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredFAQs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="bg-red-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
                        <p className="text-xl text-gray-300 mb-8">We're here to help you succeed</p>
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search tickets, FAQs, or help articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl 
                                         text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 
                                         focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8">
                        {[
                            { id: 'tickets', label: 'My Tickets', icon: MessageSquare },
                            { id: 'faq', label: 'FAQ', icon: HelpCircle },
                            { id: 'contact', label: 'Contact Us', icon: Phone }
                        ].map(tab => {
                            const IconComponent = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                                        activeTab === tab.id 
                                            ? 'border-red-500 text-red-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tickets Tab */}
                {activeTab === 'tickets' && (
                    <div className="space-y-6">
                        {/* Create Ticket Button */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
                            <button
                                onClick={() => setShowTicketForm(true)}
                                className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg 
                                         hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Create Ticket</span>
                            </button>
                        </div>

                        {/* Tickets List */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">Recent Tickets</h3>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {filteredTickets.map((ticket) => (
                                    <div key={ticket.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3">
                                                    <span className="font-mono text-sm text-gray-500">{ticket.id}</span>
                                                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(ticket.status)}`}>
                                                        {ticket.status}
                                                    </span>
                                                    <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                                                        {ticket.priority} priority
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-medium text-gray-900 mt-2">{ticket.subject}</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {ticket.category} • Created {ticket.created}
                                                </p>
                                            </div>
                                            <button className="text-red-600 hover:text-red-800 font-medium">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {filteredFAQs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                    <p className="text-gray-600 mb-3">{faq.answer}</p>
                                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                                        {faq.category}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Mail, title: 'Email Support', info: 'support@company.com', desc: 'Response within 24 hours' },
                                { icon: Phone, title: 'Phone Support', info: '1-800-SUPPORT', desc: 'Mon-Fri 9AM-6PM EST' },
                                { icon: MessageSquare, title: 'Live Chat', info: 'Available Now', desc: 'Average response: 2 minutes' }
                            ].map((contact, index) => {
                                const IconComponent = contact.icon;
                                return (
                                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                            <IconComponent className="w-8 h-8 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                                        <p className="text-red-600 font-medium mb-2">{contact.info}</p>
                                        <p className="text-sm text-gray-600">{contact.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Create Ticket Modal */}
            {showTicketForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-gray-900">Create Support Ticket</h3>
                            <button 
                                onClick={() => setShowTicketForm(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={ticketForm.name}
                                        onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={ticketForm.email}
                                        onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={ticketForm.subject}
                                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        required
                                        value={ticketForm.category}
                                        onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    >
                                        <option value="">Select category</option>
                                        <option value="Technical">Technical</option>
                                        <option value="Billing">Billing</option>
                                        <option value="General">General</option>
                                        <option value="Feature Request">Feature Request</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                                    <select
                                        value={ticketForm.priority}
                                        onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    required
                                    rows={6}
                                    value={ticketForm.description}
                                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                                    placeholder="Please describe your issue in detail..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                />
                            </div>
                            
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={handleSubmitTicket}
                                    className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 
                                             transition-colors duration-200 font-medium"
                                >
                                    Create Ticket
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowTicketForm(false)}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 
                                             transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SupportPage;