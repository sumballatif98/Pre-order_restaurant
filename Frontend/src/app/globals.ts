import { CartItem } from './Cart'

import { Injectable } from '@angular/core';

// const mongoose = require("mongoose");

@Injectable()
export class Globals {
    cartItems: CartItem[] =[];
    restName: string="";
    restId: string;
    location: string="";
}

