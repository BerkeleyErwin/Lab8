/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('pushToHistory', () => {
    test('Settings Test', () => {
        var pushSetting = pushToHistory('settings',1);
        expect(pushSetting.state).toEqual({page: 'settings'},'','./#settings');
        expect(pushSetting.length).toBe(2);
    });    

    test('Entry Test', () => {
        var pushEntry = pushToHistory('entry',1);
        expect(pushEntry.state).toEqual({page: 'entry1'}, '', './#entry1');
        expect(pushEntry.length).toBe(3);
    });  

    test('Home Test', () => {
        var pushHome = pushToHistory('home',1);
        expect(pushHome.state).toEqual({},'','./');
        expect(pushHome.length).toBe(4);
    });  

 });


