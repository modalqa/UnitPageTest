import { Selector } from 'testcafe';
import config from '../config';

fixture `Test Unit`
    .page `${config.baseUrl}`;

    test('Filter', async t => {
        await t
        .maximizeWindow()
        .click(Selector("button").withText("Campur"))
        .click(Selector("button").withText("Apply"))
        .expect(Selector('div .room-for.mr-2').textContent).contains('Campur')
        .wait(200)

    });

    test('Filter + Facilities', async t => {
        await t
        .maximizeWindow()
        .click(Selector("button").withText("Campur"))
        .click(Selector("label").withText("Wifi"))
        .click(Selector("button").withText("Apply"))
        .expect(Selector('div .room-for.mr-2').textContent).contains('Campur')
        .wait(200)

    });

    test('Filter + Facilities + Clear Filter', async t => {
        await t
        .maximizeWindow()
        .click(Selector("button").withText("Campur"))
        .click(Selector("label").withText("Wifi"))
        .click(Selector("button").withText("Apply"))
        .expect(Selector('div .room-for.mr-2').textContent).contains('Campur')
        .wait(200)
        .click(Selector("div a.clear").withText("Clear Filter"))
        .wait(200)

    });

    test('Advanced Payment Deals', async t => {
        await t
        .maximizeWindow()
        .click(Selector("span").withText("Show all"))
        .wait(200)

    });

    test('Cari', async t => {
        await t
        .maximizeWindow()
        .click(Selector("#__BVID__97__BV_toggle_"))
        .wait(50)
        .click(Selector("#__BVID__97 > ul > li:nth-child(2) > a").withText("2 Months"))
        .click(Selector("a").withText("Search"))
        .wait(300)
    });

    test('View detail list', async t => {
        await t
        .maximizeWindow()
        .wait(200)
        .click(Selector("title").withText("RoomMe Antene Radio Dalam 9"))
        .expect(Selector('h2 room-type-title.mb-0').textContent).contains('Comfort Trundle Bed')
        .wait(300)
    });
