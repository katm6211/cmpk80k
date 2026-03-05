gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
