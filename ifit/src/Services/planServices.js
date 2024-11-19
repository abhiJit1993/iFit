// API CALLS 
const db_columns = [
    {
        title: 'ID',
        type: 'Integer',
        dataIndex: 'id',
        key: 'id',
        show: false
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        show: true
    },
    {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
        show: true
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
        show: true
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        show: true
    },
    {
        title: 'Plan Type',
        dataIndex: 'p_type',
        key: 'p_type',
        //values :['Individual', 'Group ','Corporate'],
        show: true
    }, {
        title: 'Gym Access',  // 24/7 or weekdays
        dataIndex: 'g_access',
        key: 'g_access',

    },
    {
        title: 'Trainer Support',
        dataIndex: 't_support',
        key: 't_support',
        show: true
    },
    {
        title: 'Facility Access',
        dataIndex: 'f_access',
        key: 'f_access',
        show: true
    },
    {

        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        show: true
    },
    {
        title: 'Cancellation Policy ',  // refundable , partially refundable , full refund
        dataIndex: 'cancellation',
        key: 'cancellation',
        show: true
    },
    {
        title: 'Sign Up Fee ',  // refundable , partially refundable , full refund
        dataIndex: 'sign up fee',
        key: 'su_fee',
        show: true
    },
    {
        title: 'Created by',  // refundable , partially refundable , full refund
        dataIndex: 'created_by',
        key: 'created_by',
        show: false
    },
    {
        title: 'Created At',  // refundable , partially refundable , full refund
        dataIndex: 'created_at',
        key: 'created_at',
        show: false
    },
    {
        title: 'Updated By',  // refundable , partially refundable , full refund
        dataIndex: 'updated_by',
        key: 'updated_by',
        show: false
    },
    {
        title: 'Updated At',  // refundable , partially refundable , full refund
        dataIndex: 'update_at',
        key: 'update_at',
        show: false
    }


];
let data = [
    {
        "id": 1,
        "name": "Plan 1",
        "desc": "Comprehensive plan for fitness",
        "duration": "3 months",
        "price": 200,
        "p_level" : 'Basic',
        "p_level_id" : 0 ,
        "p_type": "Individual",
        "g_access": "24/7",
        "t_support": "Yes",
        "f_access": "All facilities",
        "discount": 10,
        "cancellation": "Refundable",
        "sign up fee": 50,
        "created_by": "Admin",
        "created_at": "2023-01-01",
        "updated_by": "Admin",
        "update_at": "2023-06-01"
    },
    {
        "id": 2,
        "name": "Plan 2",
        "desc": "Basic plan for beginners",
        "duration": "6 months",
        "price": 300,
        "p_level" : 'Basic',
        "p_level_id" : 0 ,
        "g_access": "Weekdays",
        "t_support": "No",
        "f_access": "Gym only",
        "discount": 5,
        "cancellation": "Partially refundable",
        "sign up fee": 25,
        "created_by": "Admin",
        "created_at": "2023-02-01",
        "updated_by": "Manager",
        "update_at": "2023-07-01"
    },
    {
        "id": 3,
        "name": "Plan 3",
        "desc": "Advanced plan with trainer",
        "duration": "1 year",
        "price": 600,
        "p_level" : 'Basic',
        "p_level_id" : 0 ,
        "g_access": "24/7",
        "t_support": "Yes",
        "f_access": "All facilities",
        "discount": 20,
        "cancellation": "Non-refundable",
        "sign up fee": 100,
        "created_by": "Manager",
        "created_at": "2023-03-01",
        "updated_by": "Admin",
        "update_at": "2023-08-01"
    },
    {
        "id": 4,
        "name": "Plan 4",
        "desc": "Standard plan for regular users",
        "duration": "6 months",
        "price": 350,
       "p_level" : 'Gold',
        "p_level_id" : 1 ,
        "g_access": "Weekdays",
        "t_support": "Yes",
        "f_access": "Gym and pool",
        "discount": 15,
        "cancellation": "Refundable",
        "sign up fee": 75,
        "created_by": "Admin",
        "created_at": "2023-04-01",
        "updated_by": "Manager",
        "update_at": "2023-09-01"
    },
    {
        "id": 5,
        "name": "Plan 5",
        "desc": "Family plan for group fitness",
        "duration": "3 months",
        "price": 400,
        "p_level" : 'Gold',
        "p_level_id" : 1 ,
        "g_access": "Weekdays",
        "t_support": "No",
        "f_access": "Gym and yoga",
        "discount": 10,
        "cancellation": "Partially refundable",
        "sign up fee": 50,
        "created_by": "Manager",
        "created_at": "2023-05-01",
        "updated_by": "Admin",
        "update_at": "2023-10-01"
    },
    {
        "id": 6,
        "name": "Plan 6",
        "desc": "Student plan with discounts",
        "duration": "1 year",
        "price": 250,
        "p_level" : 'Gold',
        "p_level_id" : 1 ,
        "g_access": "24/7",
        "t_support": "No",
        "f_access": "Gym only",
        "discount": 25,
        "cancellation": "Refundable",
        "sign up fee": 20,
        "created_by": "Admin",
        "created_at": "2023-06-01",
        "updated_by": "Manager",
        "update_at": "2023-11-01"
    },
    {
        "id": 7,
        "name": "Plan 7",
        "desc": "Exclusive plan with personal trainer",
        "duration": "3 months",
        "price": 700,
        "p_level" : 'Premium',
        "p_level_id" : 2 ,
        "g_access": "24/7",
        "t_support": "Yes",
        "f_access": "All facilities",
        "discount": 5,
        "cancellation": "Non-refundable",
        "sign up fee": 100,
        "created_by": "Manager",
        "created_at": "2023-07-01",
        "updated_by": "Admin",
        "update_at": "2023-12-01"
    },
    {
        "id": 8,
        "name": "Plan 8",
        "desc": "Budget-friendly plan",
        "duration": "1 month",
        "price": 50,
        "p_level" : 'Premium',
        "p_level_id" : 2 ,
        "g_access": "Weekdays",
        "t_support": "No",
        "f_access": "Gym only",
        "discount": 0,
        "cancellation": "Refundable",
        "sign up fee": 10,
        "created_by": "Admin",
        "created_at": "2023-08-01",
        "updated_by": "Manager",
        "update_at": "2024-01-01"
    },
    {
        "id": 9,
        "name": "Plan 9",
        "desc": "Corporate plan for teams",
        "duration": "6 months",
        "price": 1500,
        "p_level" : 'Premium',
        "p_level_id" : 2 ,
        "g_access": "24/7",
        "t_support": "Yes",
        "f_access": "All facilities",
        "discount": 30,
        "cancellation": "Partially refundable",
        "sign up fee": 200,
        "created_by": "Admin",
        "created_at": "2023-09-01",
        "updated_by": "Admin",
        "update_at": "2024-02-01"
    },
    {
        "id": 10,
        "name": "Plan 10",
        "desc": "Special plan for senior citizens",
        "duration": "3 months",
        "price": 150,
        "p_level" : 'Premium',
        "p_level_id" : 2 ,
        "g_access": "Weekdays",
        "t_support": "No",
        "f_access": "Gym and pool",
        "discount": 50,
        "cancellation": "Refundable",
        "sign up fee": 10,
        "created_by": "Manager",
        "created_at": "2023-10-01",
        "updated_by": "Admin",
        "update_at": "2024-03-01"
    }
]

const planAPIService = {


    getPlanCols: () => {
        return new Promise((resolve, reject) => {
            let planCols = db_columns.filter((col) => {
                return col.show == true
            })
            return resolve(planCols)
        })

    },
    getPlans: (id) => {

        return new Promise((resolve, reject) => {
            return resolve(data)
        })
    }
}


export default planAPIService