import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TweetsPage } from '../../pages/tweets/tweets';

import { DataProvider } from '../../providers/data/data';

import * as d3 from 'd3';

import { nodes_data, links_data } from '../../data/ex_data';

/**
 * Generated class for the BotNetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bot-network',
  templateUrl: 'bot-network.html',
})
export class BotNetworkPage {

  title: string;
  width: number;
  height: number;
  radius: number;
  svg: any;
  grp: any;
  sim: any;
  linkForce: any;
  chargeForce: any;
  centerForce: any;
  link: any;
  node: any;
  dragHandler: any;
  zoomHandler: any;

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.title = 'Bot Network';
    this.height = 320;
    this.width = 320;
    this.radius = 6
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotNetworkPage');
    
    this.initSvg();
    this.initSim();
    this.draw();
    // this.initZoomAndDrag();
  }

  initSvg() {
    this.svg = d3.select('#bot_network')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    this.grp = this.svg.append('g')
      .attr('class', 'everything');
  }

  initSim() {
    this.sim = d3.forceSimulation()
      .nodes(nodes_data);

    this.linkForce = d3.forceLink(links_data)
      .id((d) => d.name);

    this.chargeForce = d3.forceManyBody()
      .strength(-100);

    this.centerForce = d3.forceCenter(this.width / 2, this.height / 2);

    this.sim
      .force('charge_force', this.chargeForce)
      .force('center_force', this.centerForce)
      .force('links', this.linkForce);
  }

  draw() {
    let link = this.link =  this.grp.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links_data)
      .enter().append("line")
      .attr("stroke-width", 2)
      .style("stroke", this.linkColor);

    let node = this.node =  this.grp.append("g")
      .attr("class", "nodes") 
      .selectAll("circle")
      .data(nodes_data)
      .enter()
      .append("circle")
      .attr("r", this.radius)
      .attr("fill", this.circleColor);

    this.sim.on('tick', tickActions);

    function tickActions() {
      //update circle positions each tick of the simulation 
      node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  
      //update link positions 
      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    }
  }

  initZoomAndDrag() {
    let grp = this.grp;
    let sim = this.sim;

    this.dragHandler = d3.drag()
      .on('start', dragStart)
      .on('drag', dragDrag)
      .on('end', dragEnd);

    this.dragHandler(this.node);

    this.zoomHandler = d3.zoom()
      .on('zoom', zoom);

    this.zoomHandler(this.svg);

    function zoom() {
      grp.attr('transform', d3.event.transform);
    }
  
    function dragStart(d) {
      if (!d3.event.active) sim.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
  
    function dragDrag(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
  
    function dragEnd(d) {
      if (!d3.event.active) sim.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  linkColor(d) {
    if (d.type == 'A') {
      return 'green';
    } else {
      return 'red';
    }
  }

  circleColor(d) {
    if (d.sex == 'M') {
      return 'blue';
    } else {
      return 'pink';
    }
  }

  changeFilters() {
    console.log('change filters');
    
  }
  goTweets() {
    this.navCtrl.push(TweetsPage);
  }

}
