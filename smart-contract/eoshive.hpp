#pragma once

#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/singleton.hpp>

using namespace eosio;

CONTRACT eoshive : public eosio::contract {

    using contract::contract;

    public:
    struct [[eosio::table]] project {
        uint64_t id;
        uint64_t project_id;
        std::string project_id_string;
        std::string project_name;
        name manager;
        asset operation_amount;
        asset funding;
        double operation_percentage;
        name account0;
        double account0_percentage;
        name account1;
        double account1_percentage;
        name account2;
        double account2_percentage;
        name account3;
        double account3_percentage;
        name account4;
        double account4_percentage;
        name account5;
        double account5_percentage;
        name account6;
        double account6_percentage;
        name account7;
        double account7_percentage;
        name account8;
        double account8_percentage;
        name account9;
        double account9_percentage;
        uint64_t created_at;
        bool completed;
        uint64_t completed_at;

        auto primary_key() const { return id; }

        EOSLIB_SERIALIZE(project, 
        (id)
        (project_id)
        (manager)
        (project_name)
        (operation_amount)
        (funding)
        (operation_percentage)
        (account0)
        (account0_percentage)
        (account1)
        (account1_percentage)
        (account2)
        (account2_percentage)
        (account3)
        (account3_percentage)
        (account4)
        (account4_percentage)
        (account5)
        (account5_percentage)
        (account6)
        (account6_percentage)
        (account7)
        (account7_percentage)
        (account8)
        (account8_percentage)
        (account9)
        (account9_percentage)
        (created_at)
        (completed)
        (completed_at))
    };

    typedef multi_index<"projects"_n, project> project_index;

    [[eosio::action]] void createProject(
        const std::string project_name,
        const name manager,
        const double operation_percentage,
        const name account0,
        const double account0_percentage,
        const name account1,
        const double account1_percentage,
        const name account2,
        const double account2_percentage,
        const name account3,
        const double account3_percentage,
        const name account4,
        const double account4_percentage,
        const name account5,
        const double account5_percentage,
        const name account6,
        const double account6_percentage,
        const name account7,
        const double account7_percentage,
        const name account8,
        const double account8_percentage,
        const name account9,
        const double account9_percentage
    );

    [[eosio::action]] void editProject(
        const std::string project_id_string,
        const std::string project_name,
        const double operation_percentage,
        const double account0_percentage,
        const double account1_percentage,
        const double account2_percentage,
        const double account3_percentage,
        const double account4_percentage,
        const double account5_percentage,
        const double account6_percentage,
        const double account7_percentage,
        const double account8_percentage,
        const double account9_percentage
    );

    [[eosio::action]] void addAccount(
        const std::string project_id_string,
        const name account
    );

    [[eosio::action]] void addFunding(
        const std::string project_id_string,
        const asset funding
    );

    [[eosio::action]] void completeProject(
        const std::string project_id_string
    );
};