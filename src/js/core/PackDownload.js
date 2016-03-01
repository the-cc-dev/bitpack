//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import {
    Class,
    Obj
} from 'bugcore';


//-------------------------------------------------------------------------------
// Declare Class
//-------------------------------------------------------------------------------

/**
 * @class
 * @extends {Obj}
 */
const PackDownload = Class.extend(Obj, {

    _name: 'bitpack.PackDownload',


    //-------------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------------

    /**
     * @constructs
     * @param {string} packUrl
     * @param {PackPackage} packPackage
     */
    _constructor(packUrl, packPackage) {

        this._super();


        //-------------------------------------------------------------------------------
        // Public Properties
        //-------------------------------------------------------------------------------

        /**
         * @private
         * @type {PackPackage}
         */
        this.packPackage  = packPackage;

        /**
         * @private
         * @type {string}
         */
        this.packUrl      = packUrl;
    },


    //-------------------------------------------------------------------------------
    // Getters and Setters
    //-------------------------------------------------------------------------------

    /**
     * @return {PackPackage}
     */
    getPackPackage() {
        return this.packPackage;
    },

    /**
     * @return {string}
     */
    getPackUrl() {
        return this.packUrl;
    }
});


//-------------------------------------------------------------------------------
// Exports
//-------------------------------------------------------------------------------

export default PackDownload;
