import { IMenu } from "@/types/menu-d-t";

const menu_data:IMenu[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/about-us',
    title:'About Us'
  },
  {
    id:3,
    link:'/',
    title:'Solutions',
    mega_menu:true,
    mega_menus:[
      {
        id:1,
        menus:[
          {link:'/service-v1',title:'Oracle'},
          {link:'/service-v2',title:'Finacle'},
          {link:'/service-details',title:'Outsystems'},
          {link:'/team-v1',title:'Mendix'},
          {link:'/team-v2',title:'ServiceNow'},
          {link:'/team-details',title:'Automation Anywhere'},
          {link:'/team-details',title:'Finacle'}
        ]
      },
      {
        id:2,
        menus:[
          {link:'/service-v1',title:'Contract Staffing'},
          {link:'/service-v2',title:'Permanent Staffing'},
          {link:'/service-details',title:'Hire-Train-Deploy'}
        ]
      },
      {
        id:3,
        menus:[
          {link:'/service-v1',title:'Website Development'},
          {link:'/service-v2',title:'App Development'},
          {link:'/service-details',title:'Graphic Designing'},
          {link:'/team-v1',title:'Digital Marketing'},
          {link:'/team-v2',title:'Paid Ads'},
          {link:'/team-details',title:'SEO'},
          {link:'/team-details',title:'Social Media Marketing'},
          {link:'/team-details',title:'Email Marketing'},
          {link:'/team-details',title:'Lead Generation'},
          {link:'/team-details',title:'Branding Services'},
          {link:'/team-details',title:'Startup Consulting'},

        ]
      }
    ]
  },
  {
    id:4,
    link:'#',
    title:'JCOE',
    dropdown:true,
    dropdown_menus:[
          {link:'#',title:'SAP'},
          {link:'#',title:'Salesforces'},
          {link:'#',title:'Oracle'},
          {link:'#',title:'Servicenow'},
          {link:'#',title:'Outsystems'},
          {link:'#',title:'Mendix'},
          {link:'#',title:'Low Code No Code'},
    ]
  },
  {
    id:5,
    link:'#',
    title:'Training ',
    dropdown:true,
    dropdown_menus:[
          {link:'#',title:'Corporate Training'},
          {link:'#',title:'Customise Training'},
          {link:'#',title:'Online Courses'},
    ]
  },
  {
    id:6,
    link:'#',
    title:'Company ',
    dropdown:true,
    dropdown_menus:[
          {link:'#',title:'Our Story'},
          {link:'#',title:'Vision'},
          {link:'#',title:'Mission'},
          {link:'#',title:'Awards'},
          {link:'#',title:'Recognition'},
          {link:'#',title:'Our Culture'},
          {link:'#',title:'Leadership'},
          {link:'#',title:'Partners'},
    ]
  },
  {
    id:7,
    link:'/blog',
    title:'Blog',
    dropdown:true,
    dropdown_menus:[
      {link:'/blog',title:'Blogs'},
      {link:'/blog',title:'News & Media'},
      // {link:'/blog-grid',title:'Blog Grid'},
      // {link:'/blog-details',title:'Blog Details'},
    ]
  }
  // {
  //   id:8,
  //   link:'/contact',
  //   title:'Contact'
  // }
]

export default menu_data;