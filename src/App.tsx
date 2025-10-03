import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  FileText, 
  Shield, 
  Building, 
  Award, 
  Truck, 
  Copyright, 
  Calculator, 
  Star,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Home
} from 'lucide-react';

// Service data with detailed articles
const servicesData = {
  'gst-registration': {
    icon: <Calculator className="w-8 h-8" />,
    name: "GST Registration",
    description: "Get your GST registration completed quickly and efficiently with expert guidance.",
    article: {
      title: "Complete Guide to GST Registration in India",
      content: `
        <h2>What is GST Registration?</h2>
        <p>Goods and Services Tax (GST) registration is a mandatory requirement for businesses in India with an annual turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for northeastern states). GST is a comprehensive indirect tax that has replaced multiple taxes like VAT, service tax, and excise duty.</p>
        
        <h2>Who Needs GST Registration?</h2>
        <ul>
          <li>Businesses with annual turnover above Rs. 40 lakhs</li>
          <li>Inter-state suppliers (regardless of turnover)</li>
          <li>E-commerce operators</li>
          <li>Non-resident taxable persons</li>
          <li>Input service distributors</li>
        </ul>
        
        <h2>Documents Required</h2>
        <ul>
          <li>PAN card of the business</li>
          <li>Aadhaar card of authorized signatory</li>
          <li>Business registration certificate</li>
          <li>Address proof of business premises</li>
          <li>Bank account statement</li>
          <li>Digital signature certificate</li>
        </ul>
        
        <h2>GST Registration Process</h2>
        <ol>
          <li><strong>Online Application:</strong> Submit application on GST portal with required documents</li>
          <li><strong>Document Verification:</strong> GST officer verifies submitted documents</li>
          <li><strong>Registration Certificate:</strong> Receive GST registration certificate within 3-7 working days</li>
        </ol>
        
        <h2>Benefits of GST Registration</h2>
        <ul>
          <li>Legal compliance and avoid penalties</li>
          <li>Input tax credit on purchases</li>
          <li>Nationwide business expansion</li>
          <li>Enhanced business credibility</li>
          <li>Government tender participation</li>
        </ul>
        
        <h2>GST Return Filing</h2>
        <p>After registration, businesses must file monthly/quarterly GST returns based on their turnover and business type. Regular filing ensures compliance and helps claim input tax credits.</p>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert guidance throughout the process</li>
          <li>Quick registration within 3-7 days</li>
          <li>Complete documentation support</li>
          <li>Post-registration compliance assistance</li>
          <li>24/7 customer support</li>
        </ul>
      `
    }
  },
  'trademark-registration': {
    icon: <Shield className="w-8 h-8" />,
    name: "Trademark Registration",
    description: "Protect your brand identity with comprehensive trademark registration services.",
    article: {
      title: "Trademark Registration: Protect Your Brand Identity",
      content: `
        <h2>What is a Trademark?</h2>
        <p>A trademark is a distinctive sign, symbol, word, or phrase that identifies and distinguishes your products or services from competitors. It provides legal protection for your brand identity and prevents unauthorized use by others.</p>
        
        <h2>Types of Trademarks</h2>
        <ul>
          <li><strong>Word Mark:</strong> Text-based trademarks including company names, slogans</li>
          <li><strong>Device Mark:</strong> Logo, symbols, or graphical representations</li>
          <li><strong>Combined Mark:</strong> Combination of words and devices</li>
          <li><strong>Sound Mark:</strong> Distinctive sounds or jingles</li>
          <li><strong>Shape Mark:</strong> Three-dimensional shapes of products</li>
        </ul>
        
        <h2>Trademark Registration Process</h2>
        <ol>
          <li><strong>Trademark Search:</strong> Comprehensive search to ensure uniqueness</li>
          <li><strong>Application Filing:</strong> Submit application with required documents</li>
          <li><strong>Examination:</strong> Trademark office examines the application</li>
          <li><strong>Publication:</strong> Published in trademark journal for opposition</li>
          <li><strong>Registration:</strong> Certificate issued if no opposition received</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Trademark application form (TM-A)</li>
          <li>Logo/wordmark representation</li>
          <li>Applicant's identity proof</li>
          <li>Address proof</li>
          <li>Power of attorney (if filed through agent)</li>
          <li>Priority document (if claiming priority)</li>
        </ul>
        
        <h2>Benefits of Trademark Registration</h2>
        <ul>
          <li>Exclusive rights to use the trademark</li>
          <li>Legal protection against infringement</li>
          <li>Brand recognition and credibility</li>
          <li>Asset value for business</li>
          <li>Licensing and franchising opportunities</li>
          <li>Protection in e-commerce platforms</li>
        </ul>
        
        <h2>Trademark Classes</h2>
        <p>Trademarks are registered under specific classes based on goods and services. There are 45 international classes - 34 for goods and 11 for services. Choosing the right class is crucial for effective protection.</p>
        
        <h2>Trademark Validity and Renewal</h2>
        <p>A registered trademark is valid for 10 years from the date of registration and can be renewed indefinitely for successive periods of 10 years each.</p>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Comprehensive trademark search and analysis</li>
          <li>Expert guidance on class selection</li>
          <li>Complete application preparation and filing</li>
          <li>Regular status updates and follow-ups</li>
          <li>Post-registration maintenance services</li>
        </ul>
      `
    }
  },
  'company-registration': {
    icon: <Building className="w-8 h-8" />,
    name: "Company Registration",
    description: "Incorporate your business with Private Limited, LLP, or Partnership registration.",
    article: {
      title: "Company Registration in India: Complete Guide",
      content: `
        <h2>Types of Company Registration</h2>
        <p>India offers various business structures, each with distinct advantages and compliance requirements. Choose the right structure based on your business needs, investment capacity, and growth plans.</p>
        
        <h2>Private Limited Company</h2>
        <p>Most popular choice for startups and growing businesses due to limited liability protection and easier fundraising opportunities.</p>
        <ul>
          <li><strong>Minimum Requirements:</strong> 2 directors, 2 shareholders, Rs. 1 lakh authorized capital</li>
          <li><strong>Benefits:</strong> Limited liability, separate legal entity, easy transfer of shares</li>
          <li><strong>Compliance:</strong> Annual filing, board meetings, audit requirements</li>
        </ul>
        
        <h2>Limited Liability Partnership (LLP)</h2>
        <p>Ideal for professional services and partnerships seeking limited liability with operational flexibility.</p>
        <ul>
          <li><strong>Minimum Requirements:</strong> 2 partners, 2 designated partners</li>
          <li><strong>Benefits:</strong> Limited liability, no minimum capital, fewer compliance requirements</li>
          <li><strong>Suitable for:</strong> Professional services, consulting firms, small businesses</li>
        </ul>
        
        <h2>One Person Company (OPC)</h2>
        <p>Perfect for solo entrepreneurs who want corporate benefits with single ownership.</p>
        <ul>
          <li><strong>Requirements:</strong> 1 director, 1 shareholder, 1 nominee</li>
          <li><strong>Benefits:</strong> Limited liability, single ownership, easier compliance</li>
          <li><strong>Limitations:</strong> Cannot raise funds from public, limited business activities</li>
        </ul>
        
        <h2>Company Registration Process</h2>
        <ol>
          <li><strong>Name Reservation:</strong> Check availability and reserve company name</li>
          <li><strong>Digital Signature:</strong> Obtain DSC for directors</li>
          <li><strong>Director Identification:</strong> Apply for DIN for all directors</li>
          <li><strong>MOA & AOA:</strong> Prepare Memorandum and Articles of Association</li>
          <li><strong>Incorporation:</strong> File incorporation documents with ROC</li>
          <li><strong>Certificate:</strong> Receive Certificate of Incorporation</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>PAN card of all directors/partners</li>
          <li>Aadhaar card of all directors/partners</li>
          <li>Address proof of registered office</li>
          <li>Rent agreement or property documents</li>
          <li>Passport size photographs</li>
          <li>Bank account statement</li>
          <li>Utility bills for address proof</li>
        </ul>
        
        <h2>Post-Incorporation Compliances</h2>
        <ul>
          <li>Open current bank account</li>
          <li>GST registration (if applicable)</li>
          <li>Professional tax registration</li>
          <li>ESI and PF registration for employees</li>
          <li>Annual filing requirements</li>
        </ul>
        
        <h2>Advantages of Company Registration</h2>
        <ul>
          <li>Limited liability protection</li>
          <li>Separate legal entity status</li>
          <li>Easier access to funding and loans</li>
          <li>Enhanced business credibility</li>
          <li>Tax benefits and deductions</li>
          <li>Perpetual succession</li>
        </ul>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert consultation on business structure selection</li>
          <li>Complete documentation and filing support</li>
          <li>Fast incorporation within 7-15 days</li>
          <li>Post-incorporation compliance assistance</li>
          <li>Ongoing legal and regulatory support</li>
        </ul>
      `
    }
  },
  'fssai-license': {
    icon: <Award className="w-8 h-8" />,
    name: "FSSAI License",
    description: "Obtain your food safety license for food business operations in India.",
    article: {
      title: "FSSAI License: Complete Guide for Food Businesses",
      content: `
        <h2>What is FSSAI License?</h2>
        <p>Food Safety and Standards Authority of India (FSSAI) license is mandatory for all food businesses in India. It ensures food safety standards and builds consumer confidence in your food products.</p>
        
        <h2>Types of FSSAI Licenses</h2>
        <ul>
          <li><strong>Basic FSSAI Registration:</strong> For small food businesses with turnover up to Rs. 12 lakhs</li>
          <li><strong>State FSSAI License:</strong> For medium food businesses with turnover Rs. 12 lakhs to Rs. 20 crores</li>
          <li><strong>Central FSSAI License:</strong> For large food businesses with turnover above Rs. 20 crores</li>
        </ul>
        
        <h2>Who Needs FSSAI License?</h2>
        <ul>
          <li>Food manufacturers and processors</li>
          <li>Restaurants and food service establishments</li>
          <li>Food importers and exporters</li>
          <li>Food storage and warehouse operators</li>
          <li>Food transporters and distributors</li>
          <li>Online food delivery platforms</li>
          <li>Catering services</li>
        </ul>
        
        <h2>FSSAI Registration Process</h2>
        <ol>
          <li><strong>Determine License Type:</strong> Based on business turnover and operations</li>
          <li><strong>Document Preparation:</strong> Gather all required documents</li>
          <li><strong>Online Application:</strong> Submit application on FSSAI portal</li>
          <li><strong>Fee Payment:</strong> Pay applicable fees online</li>
          <li><strong>Verification:</strong> FSSAI officer may conduct inspection</li>
          <li><strong>License Issuance:</strong> Receive FSSAI license certificate</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Form A (application form)</li>
          <li>Identity proof of applicant</li>
          <li>Address proof of business premises</li>
          <li>NOC from municipality/panchayat</li>
          <li>Water test report</li>
          <li>Medical certificate of food handlers</li>
          <li>Layout plan of processing unit</li>
          <li>List of food products</li>
          <li>Partnership deed/MOA (if applicable)</li>
        </ul>
        
        <h2>FSSAI License Validity and Renewal</h2>
        <ul>
          <li><strong>Basic Registration:</strong> Valid for 1-5 years</li>
          <li><strong>State License:</strong> Valid for 1-5 years</li>
          <li><strong>Central License:</strong> Valid for 1-5 years</li>
          <li>Renewal must be done before expiry date</li>
        </ul>
        
        <h2>Benefits of FSSAI License</h2>
        <ul>
          <li>Legal compliance for food business operations</li>
          <li>Consumer trust and brand credibility</li>
          <li>Access to government schemes and subsidies</li>
          <li>Eligibility for food export</li>
          <li>Protection from legal penalties</li>
          <li>Quality assurance certification</li>
        </ul>
        
        <h2>FSSAI Compliance Requirements</h2>
        <ul>
          <li>Display FSSAI license number on packaging</li>
          <li>Maintain hygiene and safety standards</li>
          <li>Regular testing of food products</li>
          <li>Training of food handlers</li>
          <li>Proper labeling of food products</li>
          <li>Annual returns filing</li>
        </ul>
        
        <h2>Penalties for Non-Compliance</h2>
        <p>Operating without FSSAI license can result in penalties up to Rs. 5 lakhs and imprisonment up to 6 months. Ensure timely registration to avoid legal complications.</p>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert guidance on license type selection</li>
          <li>Complete documentation support</li>
          <li>Fast processing within 7-30 days</li>
          <li>Compliance assistance and renewals</li>
          <li>Ongoing regulatory updates</li>
        </ul>
      `
    }
  },
  'import-export-code': {
    icon: <Truck className="w-8 h-8" />,
    name: "Import Export Code",
    description: "Get IEC registration for international trade and business expansion.",
    article: {
      title: "Import Export Code (IEC): Gateway to International Trade",
      content: `
        <h2>What is Import Export Code (IEC)?</h2>
        <p>Import Export Code (IEC) is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT) that serves as a primary requirement for any business or individual looking to engage in import or export activities in India.</p>
        
        <h2>Who Needs IEC Registration?</h2>
        <ul>
          <li>Businesses planning to import goods</li>
          <li>Companies looking to export products</li>
          <li>Service exporters (software, consulting, etc.)</li>
          <li>Individuals engaged in import/export</li>
          <li>Merchant exporters and trading companies</li>
        </ul>
        
        <h2>IEC Registration Process</h2>
        <ol>
          <li><strong>Online Application:</strong> Submit application on DGFT portal</li>
          <li><strong>Document Upload:</strong> Upload all required documents</li>
          <li><strong>Fee Payment:</strong> Pay registration fee online</li>
          <li><strong>Verification:</strong> DGFT verifies submitted information</li>
          <li><strong>IEC Issuance:</strong> Receive IEC certificate within 15-30 days</li>
        </ol>
        
        <h2>Documents Required for IEC</h2>
        <ul>
          <li>Duly filled IEC application form</li>
          <li>PAN card of applicant</li>
          <li>Identity proof (Aadhaar/Passport/Voter ID)</li>
          <li>Address proof of business premises</li>
          <li>Bank certificate with account details</li>
          <li>Cancelled cheque or bank statement</li>
          <li>Partnership deed/MOA/AOA (for entities)</li>
          <li>Board resolution (for companies)</li>
          <li>Photograph of applicant</li>
        </ul>
        
        <h2>Types of IEC Applications</h2>
        <ul>
          <li><strong>Fresh IEC:</strong> New registration for first-time applicants</li>
          <li><strong>IEC Modification:</strong> Changes in existing IEC details</li>
          <li><strong>IEC Surrender:</strong> Voluntary surrender of IEC</li>
          <li><strong>IEC Transfer:</strong> Transfer due to business restructuring</li>
        </ul>
        
        <h2>Benefits of IEC Registration</h2>
        <ul>
          <li>Legal authorization for import/export activities</li>
          <li>Access to government export promotion schemes</li>
          <li>Eligibility for export incentives and subsidies</li>
          <li>Customs clearance facilitation</li>
          <li>Banking benefits for foreign exchange</li>
          <li>Participation in international trade fairs</li>
          <li>Enhanced business credibility globally</li>
        </ul>
        
        <h2>IEC Validity and Maintenance</h2>
        <ul>
          <li>IEC has lifetime validity (no renewal required)</li>
          <li>Must file annual returns if export/import value exceeds specified limits</li>
          <li>Update IEC details in case of business changes</li>
          <li>Maintain proper documentation for all transactions</li>
        </ul>
        
        <h2>Export Promotion Schemes</h2>
        <p>With IEC registration, businesses can avail various government schemes:</p>
        <ul>
          <li>Merchandise Exports from India Scheme (MEIS)</li>
          <li>Service Exports from India Scheme (SEIS)</li>
          <li>Export Promotion Capital Goods (EPCG)</li>
          <li>Advance Authorization Scheme</li>
          <li>Duty Free Import Authorization (DFIA)</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Incorrect bank account details</li>
          <li>Mismatch in PAN and other documents</li>
          <li>Incomplete address information</li>
          <li>Wrong business activity codes</li>
          <li>Missing mandatory documents</li>
        </ul>
        
        <h2>Post-IEC Compliance</h2>
        <ul>
          <li>File annual returns (if applicable)</li>
          <li>Update changes in business details</li>
          <li>Maintain proper export/import documentation</li>
          <li>Comply with foreign exchange regulations</li>
          <li>Regular reconciliation with customs data</li>
        </ul>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert guidance on IEC application process</li>
          <li>Complete documentation support</li>
          <li>Fast processing within 15-30 days</li>
          <li>Post-registration compliance assistance</li>
          <li>Ongoing support for export-import activities</li>
          <li>Updates on policy changes and schemes</li>
        </ul>
      `
    }
  },
  'iso-certification': {
    icon: <Star className="w-8 h-8" />,
    name: "ISO Certification",
    description: "Achieve ISO certification to enhance your business credibility and standards.",
    article: {
      title: "ISO Certification: Elevate Your Business Standards",
      content: `
        <h2>What is ISO Certification?</h2>
        <p>ISO (International Organization for Standardization) certification demonstrates that your business meets internationally recognized standards for quality, safety, efficiency, and environmental management. It enhances credibility and opens doors to global markets.</p>
        
        <h2>Popular ISO Standards</h2>
        <ul>
          <li><strong>ISO 9001:</strong> Quality Management System</li>
          <li><strong>ISO 14001:</strong> Environmental Management System</li>
          <li><strong>ISO 45001:</strong> Occupational Health and Safety</li>
          <li><strong>ISO 27001:</strong> Information Security Management</li>
          <li><strong>ISO 22000:</strong> Food Safety Management</li>
          <li><strong>ISO 13485:</strong> Medical Devices Quality Management</li>
          <li><strong>ISO 50001:</strong> Energy Management System</li>
        </ul>
        
        <h2>ISO 9001 - Quality Management System</h2>
        <p>Most widely adopted ISO standard focusing on customer satisfaction and continuous improvement.</p>
        <ul>
          <li>Applicable to any organization regardless of size or industry</li>
          <li>Focuses on customer satisfaction and quality improvement</li>
          <li>Requires documented quality management system</li>
          <li>Emphasizes risk-based thinking and process approach</li>
        </ul>
        
        <h2>ISO Certification Process</h2>
        <ol>
          <li><strong>Gap Analysis:</strong> Assess current systems against ISO requirements</li>
          <li><strong>Documentation:</strong> Develop quality manual and procedures</li>
          <li><strong>Implementation:</strong> Implement management system across organization</li>
          <li><strong>Internal Audit:</strong> Conduct internal audits to ensure compliance</li>
          <li><strong>Management Review:</strong> Review system effectiveness</li>
          <li><strong>Certification Audit:</strong> External audit by accredited certification body</li>
          <li><strong>Certificate Issuance:</strong> Receive ISO certificate upon successful audit</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Company registration certificate</li>
          <li>Business license and permits</li>
          <li>Organizational chart</li>
          <li>Process flow charts</li>
          <li>Quality manual</li>
          <li>Standard operating procedures</li>
          <li>Work instructions</li>
          <li>Record formats and templates</li>
        </ul>
        
        <h2>Benefits of ISO Certification</h2>
        <ul>
          <li>Enhanced customer confidence and satisfaction</li>
          <li>Improved operational efficiency</li>
          <li>Better risk management</li>
          <li>Access to global markets</li>
          <li>Competitive advantage in tenders</li>
          <li>Reduced costs through process optimization</li>
          <li>Improved employee morale and engagement</li>
          <li>Regulatory compliance assurance</li>
        </ul>
        
        <h2>ISO 14001 - Environmental Management</h2>
        <p>Helps organizations minimize environmental impact and comply with environmental regulations.</p>
        <ul>
          <li>Systematic approach to environmental management</li>
          <li>Reduces waste and environmental impact</li>
          <li>Ensures compliance with environmental laws</li>
          <li>Improves resource efficiency</li>
        </ul>
        
        <h2>ISO 27001 - Information Security</h2>
        <p>Critical for organizations handling sensitive information and data.</p>
        <ul>
          <li>Protects confidentiality, integrity, and availability of information</li>
          <li>Reduces risk of data breaches</li>
          <li>Ensures business continuity</li>
          <li>Builds customer trust in data handling</li>
        </ul>
        
        <h2>Certification Validity and Maintenance</h2>
        <ul>
          <li>ISO certificates are valid for 3 years</li>
          <li>Annual surveillance audits required</li>
          <li>Recertification audit every 3 years</li>
          <li>Continuous improvement and system maintenance</li>
        </ul>
        
        <h2>Industries Benefiting from ISO</h2>
        <ul>
          <li>Manufacturing and production</li>
          <li>Healthcare and pharmaceuticals</li>
          <li>Information technology</li>
          <li>Food and beverage</li>
          <li>Construction and engineering</li>
          <li>Financial services</li>
          <li>Education and training</li>
        </ul>
        
        <h2>Cost Considerations</h2>
        <ul>
          <li>Certification body fees</li>
          <li>Consultant fees (if required)</li>
          <li>Internal resource allocation</li>
          <li>Training and awareness programs</li>
          <li>System implementation costs</li>
          <li>Annual surveillance audit fees</li>
        </ul>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert consultation on suitable ISO standards</li>
          <li>Complete documentation and implementation support</li>
          <li>Training and awareness programs</li>
          <li>Internal audit services</li>
          <li>Liaison with certification bodies</li>
          <li>Ongoing maintenance and improvement support</li>
        </ul>
      `
    }
  },
  'copyright-registration': {
    icon: <Copyright className="w-8 h-8" />,
    name: "Copyright Registration",
    description: "Secure copyright protection for your creative works and intellectual property.",
    article: {
      title: "Copyright Registration: Protect Your Creative Works",
      content: `
        <h2>What is Copyright?</h2>
        <p>Copyright is a legal right that grants creators exclusive control over their original works of authorship. It protects literary, artistic, musical, and other creative works from unauthorized use, reproduction, or distribution.</p>
        
        <h2>Types of Works Protected by Copyright</h2>
        <ul>
          <li><strong>Literary Works:</strong> Books, articles, poems, software code</li>
          <li><strong>Musical Works:</strong> Songs, compositions, lyrics</li>
          <li><strong>Artistic Works:</strong> Paintings, drawings, photographs, sculptures</li>
          <li><strong>Dramatic Works:</strong> Plays, scripts, choreography</li>
          <li><strong>Cinematographic Works:</strong> Films, videos, documentaries</li>
          <li><strong>Sound Recordings:</strong> Audio recordings, podcasts</li>
          <li><strong>Computer Software:</strong> Programs, applications, databases</li>
        </ul>
        
        <h2>Copyright Registration Process</h2>
        <ol>
          <li><strong>Work Creation:</strong> Ensure work is original and creative</li>
          <li><strong>Application Filing:</strong> Submit application with Copyright Office</li>
          <li><strong>Document Submission:</strong> Provide copies of the work</li>
          <li><strong>Examination:</strong> Copyright office examines the application</li>
          <li><strong>Registration:</strong> Certificate issued upon approval</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Copyright application form</li>
          <li>Copy of the work to be registered</li>
          <li>Identity proof of applicant</li>
          <li>Address proof</li>
          <li>Power of attorney (if filed through agent)</li>
          <li>NOC from employer (for works created during employment)</li>
          <li>Statement of particulars</li>
        </ul>
        
        <h2>Benefits of Copyright Registration</h2>
        <ul>
          <li>Legal evidence of ownership</li>
          <li>Protection against infringement</li>
          <li>Right to license and monetize work</li>
          <li>Enhanced credibility and recognition</li>
          <li>Stronger legal position in disputes</li>
          <li>International protection through treaties</li>
          <li>Asset value for business</li>
        </ul>
        
        <h2>Copyright Duration</h2>
        <ul>
          <li><strong>Literary, Musical, Artistic Works:</strong> Lifetime of author + 60 years</li>
          <li><strong>Cinematographic Works:</strong> 60 years from publication</li>
          <li><strong>Sound Recordings:</strong> 60 years from publication</li>
          <li><strong>Government Works:</strong> 60 years from publication</li>
          <li><strong>Anonymous Works:</strong> 60 years from publication</li>
        </ul>
        
        <h2>Rights Granted by Copyright</h2>
        <ul>
          <li><strong>Reproduction Right:</strong> Control over copying of work</li>
          <li><strong>Distribution Right:</strong> Control over sale and distribution</li>
          <li><strong>Public Performance Right:</strong> Control over public performances</li>
          <li><strong>Communication Right:</strong> Control over broadcasting and online use</li>
          <li><strong>Adaptation Right:</strong> Control over derivative works</li>
          <li><strong>Translation Right:</strong> Control over translations</li>
        </ul>
        
        <h2>Copyright Infringement</h2>
        <p>Unauthorized use of copyrighted work constitutes infringement. Remedies include:</p>
        <ul>
          <li>Injunctive relief to stop infringement</li>
          <li>Monetary damages and profits</li>
          <li>Seizure and destruction of infringing copies</li>
          <li>Criminal prosecution in serious cases</li>
        </ul>
        
        <h2>Fair Use and Exceptions</h2>
        <p>Certain uses of copyrighted works are permitted without permission:</p>
        <ul>
          <li>Educational and research purposes</li>
          <li>News reporting and criticism</li>
          <li>Parody and commentary</li>
          <li>Personal and private use</li>
          <li>Library and archival purposes</li>
        </ul>
        
        <h2>International Copyright Protection</h2>
        <ul>
          <li>Berne Convention provides international protection</li>
          <li>Works protected in 179+ countries</li>
          <li>No need for separate registration in each country</li>
          <li>Automatic protection upon creation</li>
        </ul>
        
        <h2>Digital Copyright Challenges</h2>
        <ul>
          <li>Online piracy and unauthorized sharing</li>
          <li>Digital rights management (DRM)</li>
          <li>Social media content protection</li>
          <li>Software and code protection</li>
          <li>Streaming and download rights</li>
        </ul>
        
        <h2>Copyright vs. Other IP Rights</h2>
        <ul>
          <li><strong>Copyright:</strong> Protects expression of ideas</li>
          <li><strong>Patent:</strong> Protects inventions and processes</li>
          <li><strong>Trademark:</strong> Protects brand identifiers</li>
          <li><strong>Trade Secret:</strong> Protects confidential information</li>
        </ul>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert guidance on copyrightability</li>
          <li>Complete application preparation and filing</li>
          <li>Fast registration within 30-60 days</li>
          <li>Infringement monitoring and enforcement</li>
          <li>Licensing and monetization support</li>
          <li>International copyright protection guidance</li>
        </ul>
      `
    }
  },
  'income-tax-return': {
    icon: <FileText className="w-8 h-8" />,
    name: "Income Tax Return",
    description: "Professional ITR filing services for individuals and businesses.",
    article: {
      title: "Income Tax Return Filing: Complete Guide",
      content: `
        <h2>What is Income Tax Return (ITR)?</h2>
        <p>Income Tax Return (ITR) is a form used to report income, expenses, and tax liability to the Income Tax Department. Filing ITR is mandatory for individuals and entities whose income exceeds the basic exemption limit.</p>
        
        <h2>Who Must File ITR?</h2>
        <ul>
          <li>Individuals with income above Rs. 2.5 lakhs (below 60 years)</li>
          <li>Senior citizens with income above Rs. 3 lakhs (60-80 years)</li>
          <li>Super senior citizens with income above Rs. 5 lakhs (above 80 years)</li>
          <li>Companies and businesses (regardless of profit/loss)</li>
          <li>Individuals with foreign assets or income</li>
          <li>Those claiming tax refunds</li>
        </ul>
        
        <h2>Types of ITR Forms</h2>
        <ul>
          <li><strong>ITR-1 (Sahaj):</strong> For salaried individuals with income up to Rs. 50 lakhs</li>
          <li><strong>ITR-2:</strong> For individuals with capital gains or foreign income</li>
          <li><strong>ITR-3:</strong> For individuals with business or professional income</li>
          <li><strong>ITR-4 (Sugam):</strong> For presumptive income from business/profession</li>
          <li><strong>ITR-5:</strong> For partnership firms, LLPs, and associations</li>
          <li><strong>ITR-6:</strong> For companies other than claiming exemption under section 11</li>
          <li><strong>ITR-7:</strong> For trusts, political parties, and institutions</li>
        </ul>
        
        <h2>ITR Filing Process</h2>
        <ol>
          <li><strong>Gather Documents:</strong> Collect all income and investment proofs</li>
          <li><strong>Choose ITR Form:</strong> Select appropriate ITR form based on income type</li>
          <li><strong>Calculate Income:</strong> Compute total income and tax liability</li>
          <li><strong>Fill ITR Form:</strong> Complete the form with accurate details</li>
          <li><strong>Verify Return:</strong> E-verify using Aadhaar OTP or digital signature</li>
          <li><strong>Submit:</strong> File return online before due date</li>
        </ol>
        
        <h2>Documents Required</h2>
        <ul>
          <li>Form 16 (for salaried individuals)</li>
          <li>Salary slips and bank statements</li>
          <li>Interest certificates from banks</li>
          <li>Investment proofs (80C, 80D, etc.)</li>
          <li>Capital gains statements</li>
          <li>Business income and expense records</li>
          <li>TDS certificates</li>
          <li>Previous year's ITR (if applicable)</li>
        </ul>
        
        <h2>ITR Filing Due Dates</h2>
        <ul>
          <li><strong>Individuals (non-audit cases):</strong> July 31</li>
          <li><strong>Audit cases:</strong> October 31</li>
          <li><strong>Companies:</strong> October 31</li>
          <li><strong>Partnership firms:</strong> October 31</li>
          <li>Late filing penalty: Rs. 5,000 (Rs. 1,000 for income below Rs. 5 lakhs)</li>
        </ul>
        
        <h2>Tax Deductions Under Section 80C</h2>
        <ul>
          <li>Employee Provident Fund (EPF)</li>
          <li>Public Provident Fund (PPF)</li>
          <li>Equity Linked Savings Scheme (ELSS)</li>
          <li>Life insurance premiums</li>
          <li>Home loan principal repayment</li>
          <li>Children's tuition fees</li>
          <li>National Savings Certificate (NSC)</li>
          <li>Tax-saving fixed deposits</li>
        </ul>
        
        <h2>Other Important Deductions</h2>
        <ul>
          <li><strong>Section 80D:</strong> Health insurance premiums</li>
          <li><strong>Section 24:</strong> Home loan interest</li>
          <li><strong>Section 80E:</strong> Education loan interest</li>
          <li><strong>Section 80G:</strong> Charitable donations</li>
          <li><strong>Section 80TTA:</strong> Savings account interest</li>
          <li><strong>Section 87A:</strong> Tax rebate for income up to Rs. 5 lakhs</li>
        </ul>
        
        <h2>New vs. Old Tax Regime</h2>
        <ul>
          <li><strong>Old Regime:</strong> Higher tax rates with deductions and exemptions</li>
          <li><strong>New Regime:</strong> Lower tax rates with limited deductions</li>
          <li>Taxpayers can choose the beneficial regime each year</li>
          <li>Careful calculation required to determine optimal choice</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Incorrect bank account details</li>
          <li>Wrong calculation of capital gains</li>
          <li>Missing TDS entries</li>
          <li>Incorrect personal information</li>
          <li>Not reporting all income sources</li>
          <li>Claiming ineligible deductions</li>
        </ul>
        
        <h2>ITR Processing and Refunds</h2>
        <ul>
          <li>ITR processing typically takes 30-45 days</li>
          <li>Refunds credited directly to bank account</li>
          <li>Track refund status on income tax portal</li>
          <li>Intimation under section 143(1) for any discrepancies</li>
        </ul>
        
        <h2>Benefits of Timely ITR Filing</h2>
        <ul>
          <li>Avoid penalties and interest</li>
          <li>Claim tax refunds</li>
          <li>Loan approval documentation</li>
          <li>Visa application requirements</li>
          <li>Carry forward of losses</li>
          <li>Legal compliance</li>
        </ul>
        
        <h2>Why Choose LegalBolt AI?</h2>
        <ul>
          <li>Expert CA assistance for accurate filing</li>
          <li>Maximum tax savings optimization</li>
          <li>Error-free return preparation</li>
          <li>Quick processing and e-verification</li>
          <li>Post-filing support and queries</li>
          <li>Competitive pricing and transparent fees</li>
        </ul>
      `
    }
  }
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Page Component
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! This is a demo - in production, this would connect to Firebase.');
  };

  // Header Component
  const Header = () => (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About Us</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contact</a>
              <div className="flex space-x-4 px-3 pt-4">
                <button className="btn-secondary flex-1">Login</button>
                <button className="btn-primary flex-1">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Component
  const Hero = () => (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Your All-In-One Platform for
          <span className="text-cyan-400 block">Legal & Compliance Needs</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          From GST Registration to Trademarking your brand, LegalBolt AI simplifies every legal step with technology.
        </p>
        
        {/* Search Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a service (e.g., 'GST Filing', 'Company Registration')"
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Find Service
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // Services Component
  const Services = () => {
    const services = Object.entries(servicesData).map(([key, service]) => ({
      ...service,
      key
    }));

    return (
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal and compliance solutions tailored for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.key} className="card group cursor-pointer">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6 line-height-relaxed">{service.description}</p>
                <Link 
                  to={`/service/${service.key}`}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Trust Section Component
  const TrustSection = () => {
    const stats = [
      { number: "10,000+", label: "Businesses Served" },
      { number: "98.5%", label: "Customer Satisfaction" },
      { number: "50+", label: "Legal Experts" },
      { number: "24-Hour", label: "Support" }
    ];

    return (
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-cyan-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // How It Works Component
  const HowItWorks = () => {
    const steps = [
      {
        icon: <Search className="w-12 h-12" />,
        title: "Choose Your Service",
        description: "Browse our comprehensive range of legal and compliance services to find what you need."
      },
      {
        icon: <FileText className="w-12 h-12" />,
        title: "Submit Your Documents",
        description: "Upload your required documents securely through our encrypted platform."
      },
      {
        icon: <CheckCircle className="w-12 h-12" />,
        title: "Get Your Compliance Done",
        description: "Our experts handle everything while you track progress in real-time."
      }
    ];

    return (
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and efficient - get your legal work done in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600 rounded-full text-white mb-6">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-600 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Articles Component
  const Articles = () => {
    const articles = [
      {
        title: "5 Key Steps to Trademark Your Brand in India",
        summary: "Learn the essential steps to protect your brand identity through trademark registration, including documentation requirements and legal processes.",
        image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=500"
      },
      {
        title: "Understanding GST: A Guide for Small Businesses",
        summary: "Navigate the complexities of GST registration and filing with this comprehensive guide designed specifically for small business owners.",
        image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500"
      },
      {
        title: "Private Limited vs. LLP: Which is Right for Your Startup?",
        summary: "Compare the benefits and requirements of Private Limited Company and Limited Liability Partnership structures for your new business venture.",
        image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=500"
      },
      {
        title: "Digital Signature Certificate: Everything You Need to Know",
        summary: "Discover how Digital Signature Certificates can streamline your business operations and ensure secure digital transactions.",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500"
      }
    ];

    return (
      <section id="blog" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Insights from Our Legal Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with expert advice, industry updates, and practical guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="card group cursor-pointer">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{article.summary}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Component
  const Testimonials = () => {
    const testimonials = [
      {
        quote: "LegalBolt AI made our GST registration incredibly smooth. Their expert guidance saved us weeks of paperwork and confusion.",
        name: "Priya Sharma",
        company: "Tech Innovations Pvt Ltd"
      },
      {
        quote: "The trademark registration process was seamless. Their team kept us informed at every step and delivered exactly what they promised.",
        name: "Rajesh Kumar",
        company: "Creative Solutions LLP"
      },
      {
        quote: "Outstanding service for company incorporation. Professional, fast, and reliable. Highly recommend for any business setup needs.",
        name: "Anita Desai",
        company: "Green Energy Enterprises"
      }
    ];

    return (
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Real experiences from businesses we've helped succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-cyan-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/service/gst-registration" className="text-gray-300 hover:text-cyan-400 transition-colors">GST Registration</Link></li>
              <li><Link to="/service/trademark-registration" className="text-gray-300 hover:text-cyan-400 transition-colors">Trademark</Link></li>
              <li><Link to="/service/company-registration" className="text-gray-300 hover:text-cyan-400 transition-colors">Company Registration</Link></li>
              <li><Link to="/service/fssai-license" className="text-gray-300 hover:text-cyan-400 transition-colors">FSSAI License</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#refund" className="text-gray-300 hover:text-cyan-400 transition-colors">Refund Policy</a></li>
              <li><a href="#disclaimer" className="text-gray-300 hover:text-cyan-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">hello@legalboltai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-white">
                Legal<span className="text-cyan-400">Bolt</span> AI
              </Link>
            </div>
            <div className="text-gray-300 text-center md:text-right">
              <p>&copy; 2025 LegalBolt AI. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering businesses with AI-driven legal solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TrustSection />
      <HowItWorks />
      <Articles />
      <Testimonials />
      <Footer />
    </>
  );
}

// Service Page Component
function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <Link to="/" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Service Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600 rounded-full text-white mb-6">
              {service.icon}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
          <div className="text-center">
            <button className="btn-primary mr-4">Get Started</button>
            <button className="btn-secondary">Contact Expert</button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-white mb-8">{service.article.title}</h1>
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: service.article.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </article>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-cyan-100 mb-6">
              Let our experts handle your {service.name.toLowerCase()} requirements with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-cyan-900 hover:bg-gray-100">
                Start Application
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-cyan-900">
                Speak with Expert
              </button>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(servicesData)
                .filter(([key]) => key !== serviceId)
                .slice(0, 3)
                .map(([key, relatedService]) => (
                  <Link
                    key={key}
                    to={`/service/${key}`}
                    className="card group cursor-pointer"
                  >
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {relatedService.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{relatedService.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
            <p className="text-gray-300 mt-2">&copy; 2025 LegalBolt AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;