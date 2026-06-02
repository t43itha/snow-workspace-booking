import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    auto_approve: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'ed48286053104e24a83070f5202d928f'
                    }
                    'auto-flag-boardroom-approval': {
                        table: 'sys_script'
                        id: '9d95540e8a5f459d8dc168807d1099d1'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8b8f49b70f044e9581b3180553981c94'
                    }
                    bookable_item_create_acl: {
                        table: 'sys_security_acl'
                        id: 'b918b6b490ff414f9a4c41e5876a1cf0'
                    }
                    bookable_item_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'cb7e796a36b64b09ac33ccad7c27456d'
                    }
                    bookable_item_read_acl: {
                        table: 'sys_security_acl'
                        id: '80e2837c16c14988a58927ee1485ae1a'
                    }
                    bookable_item_write_acl: {
                        table: 'sys_security_acl'
                        id: '6230868d366f42ec9346a7b19512c095'
                    }
                    booking_create_acl: {
                        table: 'sys_security_acl'
                        id: '21d6c57a8dc14572927f1738d17573bf'
                    }
                    booking_created_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '3e771c70d4ba4f5781eace0495355795'
                    }
                    booking_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'b09a4ebe038e4f06ab54b1547951c319'
                    }
                    booking_read_acl: {
                        table: 'sys_security_acl'
                        id: '143af938a238412ca38af3b6599a51fa'
                    }
                    booking_write_acl: {
                        table: 'sys_security_acl'
                        id: '37747f36e893473bbc4c11dfef558ed5'
                    }
                    'booking-approval-flow': {
                        table: 'sys_hub_flow'
                        id: '11a6fb9fbc244e74a34fea42f99e703d'
                    }
                    BookingConflictChecker: {
                        table: 'sys_script_include'
                        id: 'e94766f29a2a4aa09235a388eedf7fb3'
                    }
                    'check-booking-conflict': {
                        table: 'sys_script_client'
                        id: 'd1d0fff5c9564114bbdb00a7405be8a8'
                    }
                    if_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '0240c36155c74914a93cc963df2f2e8e'
                    }
                    if_no_approval_needed: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'ae0baf3d0d224e95b7cd1e70d75c7f1f'
                    }
                    if_rejected: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '562f05e160d24d0cae03b95b1ff42d35'
                    }
                    if_requires_approval: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'd135c5db691f4536904372a15476f702'
                    }
                    lookup_bookable_item: {
                        table: 'sys_hub_action_instance_v2'
                        id: '8ec0529978a24e2193acadce7a421010'
                    }
                    lookup_requester: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c0afd88e17b94404a9992f461c9102b5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3e8a5dffffcb4c77bdc6125ceb8633d4'
                    }
                    'prevent-double-booking': {
                        table: 'sys_script'
                        id: '393a7aecb99e45e0a0d2341b8b8acf82'
                    }
                    request_manager_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'abd09c36fe864ac9a0a731c385bf34ce'
                    }
                    set_approved: {
                        table: 'sys_hub_action_instance_v2'
                        id: '8b39416108994d4f9ff153d15a14eb3b'
                    }
                    set_rejected: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'b6e52e548fc94d679d51e5633745d399'
                    }
                    'set-booking-defaults': {
                        table: 'sys_script'
                        id: 'cd6d24a2c10d42d3a7281da58c17920a'
                    }
                    'src_server_business-rules_auto-flag-boardroom-approval_js': {
                        table: 'sys_module'
                        id: '5586c573d504486fb8195bca0291417b'
                    }
                    'src_server_business-rules_prevent-double-booking_js': {
                        table: 'sys_module'
                        id: 'bc23e97c9137499195c36d4a9bde1720'
                    }
                    'src_server_business-rules_set-booking-defaults_js': {
                        table: 'sys_module'
                        id: 'ae7a84d0ad2a45319fbdf3ee40ce99bb'
                    }
                    'src_server_business-rules_validate-cancellation_js': {
                        table: 'sys_module'
                        id: '779e803a512d43dba0ad141288baa078'
                    }
                    'src_server_script-includes_booking-conflict-checker_js': {
                        table: 'sys_module'
                        id: '0e9766ecd4ce4f6e92f66a4b242d6c7e'
                    }
                    'validate-booking-times': {
                        table: 'sys_script_client'
                        id: 'a0b58d162b764a9f86ecdbfaaa215130'
                    }
                    'validate-cancellation': {
                        table: 'sys_script'
                        id: '7a64b29a0cad404898932a58a068c40b'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '08869093ae85492e8970aaf92ffc8076'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '08acfa63f22845f1ac66588bd89ecb5f'
                        key: {
                            name: 'x_2057715_equipmen.workspace_admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1424e7f2987040159940444b9d56812c'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '154f6d0e549e4f50b17cbf031f9159e4'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'bookable_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a4b2b3042da417c9e675957c8d83050'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1dd9269a25af45399776e7b7a9f0c042'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2401ddaa68854ec0bd5a6f11b58cc3b5'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'requested_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2dc25e70e8f448399ba0b112b8fec29c'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                            value: 'conference_room'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36b3d468ad11437fb43b3d10fda733ab'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'requires_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '375eea75a0f643ac8a01896d056dd503'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '389e9ee9cead49c49b78a5b512d47783'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'start_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3cea06849c0044d0b9f9abb0359a262f'
                        key: {
                            sys_security_acl: 'b09a4ebe038e4f06ab54b1547951c319'
                            sys_user_role: {
                                id: '08acfa63f22845f1ac66588bd89ecb5f'
                                key: {
                                    name: 'x_2057715_equipmen.workspace_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3de4aa34715e45e2a9d30d85e5be43ce'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '45750f5cff9f489daaf06747220083f7'
                        key: {
                            sys_security_acl: '6230868d366f42ec9346a7b19512c095'
                            sys_user_role: {
                                id: '08acfa63f22845f1ac66588bd89ecb5f'
                                key: {
                                    name: 'x_2057715_equipmen.workspace_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4a23565c5c5a45bdb2e964361f85dfce'
                        key: {
                            sys_security_acl: '80e2837c16c14988a58927ee1485ae1a'
                            sys_user_role: {
                                id: '5193ca662ac940249447e6d01d5692e8'
                                key: {
                                    name: 'x_2057715_equipmen.employee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4bbc424a2b8741859f991b1410e90e1c'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d03de2e57f24c919332a209312b4a95'
                        key: {
                            sys_security_acl: 'cb7e796a36b64b09ac33ccad7c27456d'
                            sys_user_role: {
                                id: '08acfa63f22845f1ac66588bd89ecb5f'
                                key: {
                                    name: 'x_2057715_equipmen.workspace_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4de45375a68e4b798411b6dcf04bc703'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5193ca662ac940249447e6d01d5692e8'
                        key: {
                            name: 'x_2057715_equipmen.employee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ef4991b54f44fff95bbcd296fc59a00'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5f7a09d399a9435b822c4887d5801dc2'
                        key: {
                            sys_security_acl: '21d6c57a8dc14572927f1738d17573bf'
                            sys_user_role: {
                                id: '5193ca662ac940249447e6d01d5692e8'
                                key: {
                                    name: 'x_2057715_equipmen.employee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62502cd0a03845b6b2ade78970bfbd2d'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '68cb05ce53f5420888d3fa752c561714'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ab10eb79f42434699c6812620ee5876'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'start_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c90278415bb4f3f90781559d44db436'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'bookable_item'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7056397a22594aa0b0d1734179c5e464'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '75451d050524454cb18097050dc5c48f'
                        key: {
                            sys_security_acl: '37747f36e893473bbc4c11dfef558ed5'
                            sys_user_role: {
                                id: '5193ca662ac940249447e6d01d5692e8'
                                key: {
                                    name: 'x_2057715_equipmen.employee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75aad2dfece744d098cdaced060753cc'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                            value: 'boardroom'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '773a58280e0d4a469dd0f715d35adfff'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80c14eb7c9b5432d929de8390dd45b1b'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '872198ea2f884f769548207a74452171'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8cfb9894f34342fbbb36d686a84ab426'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                            value: 'desk'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e899a582bd04fbda950cf8c926a80bf'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '979ac059e67a4075ad30dfd90a2c60eb'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'end_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e0418e71b8143c8991832bbe0c5d641'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a40d75d6b7274fe9bcc0c68e19a8d24a'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af90442c7bec4314954d39d865e5d548'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9c411239d914cd198553b1a80deb320'
                        key: {
                            sys_security_acl: '143af938a238412ca38af3b6599a51fa'
                            sys_user_role: {
                                id: '5193ca662ac940249447e6d01d5692e8'
                                key: {
                                    name: 'x_2057715_equipmen.employee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c877838845df4d60b6309a8725f11e3d'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8f91d019c954c7285453b6d1dc91ae1'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c97c9e5c75824ba79b2d2f1a5e700fda'
                        key: {
                            role: {
                                id: '08acfa63f22845f1ac66588bd89ecb5f'
                                key: {
                                    name: 'x_2057715_equipmen.workspace_admin'
                                }
                            }
                            contains: {
                                id: '5193ca662ac940249447e6d01d5692e8'
                                key: {
                                    name: 'x_2057715_equipmen.employee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de90969dc67a4e93a5e69d983e1aeb47'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'df8592e040a5465998a6a7ad3ae397bd'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'type'
                            value: 'laptop'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9c607dbbc9347dba29d8ae337fdede9'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'end_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea10142aa1c548c2b18f7512bfd1ebee'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea2f89f049c04dfaad21dcb2cdac0555'
                        key: {
                            name: 'x_2057715_equipmen_bookable_item'
                            element: 'requires_approval'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb126e0fdae14defaaedb9fa21ab0845'
                        key: {
                            sys_security_acl: 'b918b6b490ff414f9a4c41e5876a1cf0'
                            sys_user_role: {
                                id: '08acfa63f22845f1ac66588bd89ecb5f'
                                key: {
                                    name: 'x_2057715_equipmen.workspace_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eb29fe0f84b54c139f3c3a6d4a40eeb5'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1b1f452735c4f25832ca9d3d3eb713b'
                        key: {
                            name: 'x_2057715_equipmen_booking'
                            element: 'booking_state'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'fc92041d35d44293a765555b794fb7a7'
                        key: {
                            name: 'x_2057715_equipmen.manager'
                        }
                    },
                ]
            }
        }
    }
}
