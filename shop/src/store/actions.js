/**通过mutation间接更新state的多个方法的对象 */
import{
    RECEIVE_ADDRESS,
    RECEIVE_TYPES,
    RECEIVE_SHOPS
} from './mutation-types'
import {reqAddress,reqFoodTypes,reqShops} from '../api'
export default{
    //异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash=state.latitude+','+state.longitude
        const result=await reqAddress(geohash)
        if(result.code==0){
            const address=result.data
            //提交一个mutation
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取食品分类列表
    async gettypes({commit,state}){
        //发送异步ajax请求
        const result=await reqFoodTypes()
        if(result.code==0){
            const types=result.data
            //提交一个mutation
            commit(RECEIVE_TYPES,{types})
        }
    },
    //异步获取商家列表
    async getshops({commit,state}){
        //发送异步ajax请求
        const{longitude,latitude}=state
        const result=await reqShops(longitude,latitude) 
        if(result.code==0){
            const shops=result.data
            //提交一个mutation
            commit(RECEIVE_SHOPS,{shops})
        }
    }
}