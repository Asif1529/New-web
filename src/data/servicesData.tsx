import {
  Calculator,
  Shield,
  Building,
  Award,
  Truck,
  Copyright,
  FileText,
  Star
} from 'lucide-react';
import { ServiceData } from '../types';

export const servicesData: ServiceData = {
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

        <h2>Benefits of Trademark Registration</h2>
        <ul>
          <li>Exclusive rights to use the trademark</li>
          <li>Legal protection against infringement</li>
          <li>Brand recognition and credibility</li>
          <li>Asset value for business</li>
          <li>Licensing and franchising opportunities</li>
          <li>Protection in e-commerce platforms</li>
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
        <p>India offers various business structures, each with distinct advantages and compliance requirements.</p>

        <h2>Private Limited Company</h2>
        <ul>
          <li><strong>Minimum Requirements:</strong> 2 directors, 2 shareholders</li>
          <li><strong>Benefits:</strong> Limited liability, separate legal entity, easy transfer of shares</li>
          <li><strong>Compliance:</strong> Annual filing, board meetings, audit requirements</li>
        </ul>

        <h2>Limited Liability Partnership (LLP)</h2>
        <ul>
          <li><strong>Minimum Requirements:</strong> 2 partners, 2 designated partners</li>
          <li><strong>Benefits:</strong> Limited liability, no minimum capital, fewer compliance requirements</li>
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
        <p>Food Safety and Standards Authority of India (FSSAI) license is mandatory for all food businesses in India.</p>

        <h2>Types of FSSAI Licenses</h2>
        <ul>
          <li><strong>Basic Registration:</strong> For businesses with turnover up to Rs. 12 lakhs</li>
          <li><strong>State License:</strong> For businesses with turnover Rs. 12 lakhs to Rs. 20 crores</li>
          <li><strong>Central License:</strong> For businesses with turnover above Rs. 20 crores</li>
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
        <p>IEC is a unique 10-digit code issued by DGFT that serves as a primary requirement for import or export activities.</p>

        <h2>Benefits of IEC Registration</h2>
        <ul>
          <li>Legal authorization for import/export activities</li>
          <li>Access to government export promotion schemes</li>
          <li>Eligibility for export incentives and subsidies</li>
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
        <p>ISO certification demonstrates that your business meets internationally recognized standards for quality, safety, efficiency, and environmental management.</p>

        <h2>Popular ISO Standards</h2>
        <ul>
          <li><strong>ISO 9001:</strong> Quality Management System</li>
          <li><strong>ISO 14001:</strong> Environmental Management System</li>
          <li><strong>ISO 27001:</strong> Information Security Management</li>
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
        <p>Copyright is a legal right that grants creators exclusive control over their original works of authorship.</p>

        <h2>Types of Works Protected</h2>
        <ul>
          <li><strong>Literary Works:</strong> Books, articles, poems, software code</li>
          <li><strong>Musical Works:</strong> Songs, compositions, lyrics</li>
          <li><strong>Artistic Works:</strong> Paintings, drawings, photographs</li>
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
        <p>ITR is a form used to report income, expenses, and tax liability to the Income Tax Department.</p>

        <h2>Who Must File ITR?</h2>
        <ul>
          <li>Individuals with income above Rs. 2.5 lakhs (below 60 years)</li>
          <li>Companies and businesses (regardless of profit/loss)</li>
          <li>Those claiming tax refunds</li>
        </ul>
      `
    }
  }
};
