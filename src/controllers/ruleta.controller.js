
import {
    postUser
}
from '../services/postUser';

import {
    postMall
}
from '../services/postMall';

import {
    postWinners
}
from '../services/postWinners';


export function postAllUser(req, res, next) {
    try {
        postUser(req.body).then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
};
export function postAllmalls(req, res, next) {
    try {
        postMall().then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
};
export function postAllWinners(req, res, next) {
    try {
        postWinners().then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
};