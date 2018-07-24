import * as Http from './httpRequest';

export function GetAllAgents(userId) {
    return Http.doActionGet({ url: '/agent/getallagent?userId=' + userId })
}

export function GetConfiguration(agentId) {
    return Http.doActionGet({ url: '/configuration?agentid=' + agentId })
}

export function SaveConfiguration(data) {
    return Http.doActionPost({ url: '/configuration', data: data })
}

export function GetAllEntities(userID) {
    return Http.doActionGet({ url: '/entities/getallentities?userId=' + userID })
}

export function GetAllEntitieByEntitieId(entitieId) {
    return Http.doActionGet({ url: '/entities?entitieId=' + entitieId })
}


export function doSaveBot(botData) {
    return Http.doActionPost({ url: '/agent/addagent', data: botData })
}


export function doSaveEntity(entityData) {
    return Http.doActionPost({ url: '/entities/addentities', data: entityData })
}


export function doSaveinternts(intentsData) {
    return Http.doActionPost({ url: '/configuration', data: intentsData })
}

// export function doLogin(loginData) {
//     return Http.doActionPost({ url: '/login/dologin', data: loginData })
// }

export function doLogin(loginData) {
    return Http.doActionPost({ url: '/GetToken', data: loginData })
}



export function getFailedIntents() {
    return Http.doActionGet({ url: '/failedintent/getfailedintents' })
}

export function saveFailedIntentMapping(data) {
    return Http.doActionPost({ url: '/failedintent/saveFailedIntentMapping', data: data })
}

export function GetWebHooks() {
    return Http.doActionGet({ url: '/webhook/webhook' })
}

export function doSaveWebHooks(webhookData) {
    return Http.doActionPost({ url: '/webhook', data: webhookData })
}

export function getSelectedWebHookData(webhookId) {
    return Http.doActionGet({ url: '/webhook?webhookid=' + webhookId })
}

export function publishConfiguration(agentId) {
    return Http.doActionPost({ url: '/configuration/publishConfiguration', data: agentId })
}